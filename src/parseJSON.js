// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:

// parseJSON('null')
// parseJSON('[null]')
var parseJSON = function(json) {
  console.log(">>>>>", json);
  var position = 0;
  var scan = function() {
    console.log(json.substring(position));
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
        while (json[position] === ',' || json[position] === ' ') {
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
          console.log("debug1");
          console.log(json[position]);
          position++;
          return output;
        }

        if (json[position] !== '"') {
          throw new SyntaxError('expected a string');
        }

        var fieldName = scan();

        while (json[position] === ':' || json[position] === ' ') {
          position++;
        }

        output[fieldName] = scan();

        while (json[position] === ',' || json[position] === ' ') {
          position++;
        }

      }



    }
    else if(initValue >= '0' && initValue <= '9'){
      var startOfNumber = position - 1;
      while (json[position] >= '0' && json[position] <= '9') {
        position++;
      }
      return Number(json.slice(startOfNumber, position));
    }

    else if(initValue === '\"') {
      var startOfString = position;
      while(json[position] !== "\""){
        position++;
      }
      position++;
      return json.substring(startOfString, position - 1);
    }

    else if (json.substring(position, position+6).toLowerCase() === "false" ) {
      position += 5;
      return false;
    }
    else if (json.substring(position, position+5).toLowerCase() === "true" ) {
      position += 4;
      return true;
    }
    else if (json.substring(position, position+5).toLowerCase() === "null" ) {
      position += 4;
      return null;
    }
  }

  return scan(json);

};