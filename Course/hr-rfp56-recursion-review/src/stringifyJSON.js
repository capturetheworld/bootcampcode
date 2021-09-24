// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var type = typeof obj;

  if (type === 'boolean') {
    return obj ? 'true' : 'false';
  }
  if (type === 'number') {
    return obj.toString();
  }
  if (type === 'string') {
    return '"' + obj.toString() + '"';
  }
  if (type === 'bigint') {
    throw new TypeError('BigInt value can\'t be serialized in JSON');
  }
  if (type !== 'object') {
    return undefined;
  }
  if (obj === null) {
    return 'null';
  }
  if (Array.isArray(obj)) {
    var output = '[';

    for (var i = 0; i < obj.length; i++) {
      if (i !== 0) {
        output += ',';
      }
      var json = stringifyJSON(obj[i]);
      output += json === undefined ? 'null' : json;
    }
    output += ']';
    return output;
  } else {
    var output = '{';
    var needsComma = false;
    for (var key in obj) {
      var json = stringifyJSON(obj[key]);
      if (json !== undefined) {
        if (needsComma) {
          output += ',';
        } else {
          needsComma = true;
        }
        output += stringifyJSON(key) + ':' + json;
      }
    }
    output += '}';
    return output;
  }
};

