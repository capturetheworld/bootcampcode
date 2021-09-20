// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  var initValue = json[0];
  // your code goes here
  console.log(JSON.parse(json));

  if (initValue === '[') {
    //Array
    parseJSON(json.substring(1, json.length));
  } else if(initValue === '{') {
    parseJSON(json.substring(1, json.length));
    //Object
  } else if(initValue === ',') {

  }

};
