// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:

var parseJSON = function(json) {
  var position = 0;
  var skipWhitespace = function() {
    while (position < json.length && ' \n\r\t'.indexOf(json[position]) !== -1) {
      position++;
    }
  };
  var scan = function() {
    skipWhitespace();
    var initValue = json[position];
    position++;

    if (initValue === '[') {
      let output = [];
      //Array
      while (position < json.length) {
        skipWhitespace();
        if (json[position] === ']') {
          position++;
          return output;
        }
        var element = scan();
        output.push(element);
        skipWhitespace();
        if (json[position] === ',') {
          position++;
        }
      }
      throw new SyntaxError('unterminated array');


    } else if (initValue === '{') {
      let output = {};
      while (position < json.length) {
        skipWhitespace();

        if (json[position] === '}') {
          position++;
          return output;
        }

        var fieldName = scan();

        skipWhitespace();

        if (json[position] !== ':') {
          throw new SyntaxError('expected :');
        }
        position++;

        skipWhitespace();

        output[fieldName] = scan();
        skipWhitespace();
        if (json[position] === ',') {
          position++;
        }
      }
      throw new SyntaxError('unterminated object');
    } else if (initValue === '-' || initValue >= '0' && initValue <= '9') {
      var startOfNumber = position - 1;
      while (position < json.length && (json[position] === '.' || json[position] >= '0' && json[position] <= '9')) {
        position++;
      }
      return Number(json.slice(startOfNumber, position));
    } else if (initValue === '"') {
      var startOfString = position;
      var wasEscaped = false;

      var output = '';
      while (position < json.length) {
        if (json[position] === '\\') {
          position++;
        } else if (json[position] === '"') {
          position++;
          return output;
        }
        output += json[position];
        position++;
      }
      throw new SyntaxError('unterminated string');
    } else if (json.substring(position - 1, position + 4).toLowerCase() === 'false' ) {
      position += 4;
      return false;
    } else if (json.substring(position - 1, position + 3).toLowerCase() === 'true' ) {
      position += 3;
      return true;
    } else if (json.substring(position - 1, position + 3).toLowerCase() === 'null' ) {
      position += 3;
      return null;
    } else {
      skipWhitespace();
      if (position < json.length) {
        throw new SyntaxError('leftover tokens: ' + json.substring(position));
      }
    }
  };

  return scan(json);
};

