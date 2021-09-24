// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  console.log(unstringifiableValues);
  // your code goes here
  let toReturn = "";
  if(Array.isArray(obj)){

      toReturn += "[";
      for(let i = 0; i<obj.length-1; i++){
        if(typeof obj[i] !== 'function' && typeof obj[i] !== 'symbol' && obj[i] !== undefined) {
          toReturn += stringifyJSON(obj[i]) + ",";
        }
      }

      toReturn += stringifyJSON(obj[obj.length-1]) + "]";

  }

  else if(typeof obj === 'object'){

    for(let key in obj){
      if(typeof obj[key] !== 'function' && typeof obj[key] !== 'symbol' && obj[key] !== undefined){
        toReturn += stringifyJSON(key) + ":"  + stringifyJSON(obj[key]) + ",";
      }
    }
    toReturn = "{" +toReturn.substring(0,toReturn.length-1);
    toReturn += "}";
  }

  if(typeof obj === 'number' || typeof obj === 'boolean'){
    toReturn += obj.toString();
  }

  if(typeof obj === 'string'){
    toReturn += "\"" + obj + "\"" ;
  }

  // console.log(JSON.stringify(obj));

  if(obj === null){
    toReturn = 'null';
  }

  if(typeof obj === 'symbol' || obj === undefined || typeof obj === 'function' ){
    toReturn += '';
  }


  // console.log(typeof obj);

  return toReturn;



}
