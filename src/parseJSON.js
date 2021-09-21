// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:

// parseJSON('null')
// parseJSON('[null]')
var debugg;
var parseJSON = function(json) {
  debugg = json;
  var position = 0;
  var scan = function() {
    while (' \n'.indexOf(json[position]) !== -1) {
      position++;
    }
    // console.log(json.substring(position));
    var initValue = json[position];
    position++;

    if (initValue === '[') {
      let output = [];
      console.log("array");
      //Array
      while (position < json.length){
        if (json[position] === ']') {
          position++;
          return output;
        }
        var element = scan();
        output.push(element);
        while (position < json.length && (json[position] === ',' || json[position] === ' ')) {
          position++;
        }
      }
      throw new SyntaxError('unterminated array');


    } else if(initValue === '{') {
      let output = {};
      //object
      // console.log("object");
      while (position < json.length){
        if (json[position] === '}') {
          // console.log("debug1");
          console.log(json[position]);
          position++;
          return output;
        }

        var fieldName = scan();

        while (position < json.length && ': \n'.indexOf(json[position]) !== -1) {
          position++;
        }

        output[fieldName] = scan();

        while (position < json.length && ', \n'.indexOf(json[position]) !== -1) {
          position++;
        }
      }
      throw new SyntaxError('unterminated object');



    } // "[\"\\\\\\\"\\\"a\\\"\"]" > Array ["\""a""]
    // parseJSON('"\""') >>> unexpected string in JSON at position 2


  // >> ["\""a""]
    else if(initValue === '-' || initValue >= '0' && initValue <= '9'){
      var startOfNumber = position - 1;
      while (position < json.length && (json[position] === '.' || json[position] >= '0' && json[position] <= '9')) {
        position++;
      }
      return Number(json.slice(startOfNumber, position));
    }

    else if(initValue === '"') {
      var startOfString = position;
      var wasEscaped = false;

      var output = '';
      while (position < json.length) {
        if (json[position] === '\\') {
          position++;
        } else if(json[position] === '"') {
          position++;
          return output;
        }
        output += json[position];
        position++;
      }
      throw new SyntaxError("unterminated string");
    }

    else if (json.substring(position - 1, position+4).toLowerCase() === "false" ) {
      position += 4;
      return false;
    }
    else if (json.substring(position - 1, position+3).toLowerCase() === "true" ) {
      position += 3;
      return true;
    }
    else if (json.substring(position - 1, position+3).toLowerCase() === "null" ) {
      position += 3;
      return null;
    }
    else {
      console.log("Help! Something went wrong!", json.substring(position));
    }
  }

  return scan(json);

};

