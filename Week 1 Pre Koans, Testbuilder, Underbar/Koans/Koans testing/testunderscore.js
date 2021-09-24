
import _, { map } from 'underscore';


// // var sum = _.chain().range(1000)

// // .filter(function(x) { if(x % 3 === 0 || x % 5 === 0) {return x; }})
// // .reduce(function (accumulator, number) {
// //   return accumulator + number;
// // }, 0); /* try chaining range() and reduce() */


// // console.log(sum);


// var result = _.chain([ [0, 1], 2 ])
//       .flatten()
//       .map(function(x) { return x + 1; } )
//       .reduce(function(sum, x) { return sum + x; })
//       .value();

//       console.log(result);



//       // { {ingredient name} : 0, artichoke : 1, sundried tomatoes : 2, mushrooms : 2, roma : 1, goats cheese : 1, rosemary : 1, black beans : 1, jalapenos : 1, blue cheese : 1, garlic : 1, walnuts : 1, spinach : 1, kalamata olives : 1, sesame seeds : 1, beget : Function } to be 2.


let products = [
  { name: 'Sonoma', ingredients: ['artichoke', 'sundried tomatoes', 'mushrooms'], containsNuts: false },
  { name: 'Pizza Primavera', ingredients: ['roma', 'sundried tomatoes', 'goats cheese', 'rosemary'], containsNuts: false },
  { name: 'South Of The Border', ingredients: ['black beans', 'jalapenos', 'mushrooms'], containsNuts: false },
  { name: 'Blue Moon', ingredients: ['blue cheese', 'garlic', 'walnuts'], containsNuts: true },
  { name: 'Taste Of Athens', ingredients: ['spinach', 'kalamata olives', 'sesame seeds'], containsNuts: true }
];


var ingredientCount = { '{ingredient name}': 0 };

var final = _(products).chain()
.map( function(products) {
  var all = [];
  for (var ingredient = 0; ingredient < products['ingredients'].length; ingredient++) {
    all.push(products['ingredients'][ingredient]);
  }
  console.log("ALL IS" + all);
  return all;
})
.flatten(1).reduce(function (acc, curr) {
  if (typeof acc[curr] == 'undefined') {
    acc[curr] = 1;
  } else {
    acc[curr]++;
  }

  return acc;
}, {}).value();


/* chain() together map(), flatten() and reduce() */

console.log(final);