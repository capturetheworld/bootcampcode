// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

// Warning: Regular Expressions (RegEx) are NOT ALLOWED on this assignment!

var detectNetwork = function(cardNumber) {
  var cardNum = parseInt(cardNumber);
  if (isNaN(cardNum)) {
    throw new Error('The cardNumber is not actually a number!');
  }

  if ((cardNumber.slice(0, 6) >= 622126 && cardNumber.slice(0, 6) <= 622925) ||
  (cardNumber.slice(0, 3) >= 624 && cardNumber.slice(0, 3) <= 626) ||
  (cardNumber.slice(0, 4) >= 6282 && cardNumber.slice(0, 4) <= 6288)) {
    if (cardNumber.length >= 16 && cardNumber.length <= 19 ) {
      return ("China UnionPay");
    }
  }

  if (cardNumber.slice(0, 6) === '564182' || cardNumber.slice(0, 6) === '633110' || cardNumber.slice(0, 4) === '4903' || cardNumber.slice(0, 4) === '4905'|| cardNumber.slice(0, 4) === '4911'|| cardNumber.slice(0, 4) === '4936'|| cardNumber.slice(0, 4) === '6333'|| cardNumber.slice(0, 4) === '6759') {
    if (cardNumber.length === 16 || cardNumber.length === 18 || cardNumber.length === 19) {
      return ("Switch");
    }
  }
  if (cardNumber.slice(0, 2) === '38' || cardNumber.slice(0, 2) === '39') {
    if (cardNumber.length === 14) {
      return ("Diner's Club");
    } else {
      console.log("Almost Diner's Club, but not the right length.");
    }
  }
  if (cardNumber.slice(0, 2) === '34' || cardNumber.slice(0, 2) === '37') {
    if (cardNumber.length === 15) {
      return ("American Express");
    }

  }
  if (cardNumber.slice(0, 1) === '4') {
    if (cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19) {
      return ("Visa");
    }
  }

  console.log(cardNumber.slice(0, 2) >= 51);
  if (cardNumber.slice(0, 2) >= 51 && cardNumber.slice(0, 2) <= 55) {
    if (cardNumber.length === 16) {
      return ("MasterCard");
    }
  }

  if ((cardNumber.slice(0, 3) >= 644 && cardNumber.slice(0, 3) <= 649) || cardNumber.slice(0, 4) === '6011' || cardNumber.slice(0, 2) === '65' ) {
    if (cardNumber.length === 16 || cardNumber.length === 19 ) {
      return ("Discover");
    }
  }

  if (cardNumber.slice(0, 4) === '5018' || cardNumber.slice(0, 4) === '5020' || cardNumber.slice(0, 4) === '5038' || cardNumber.slice(0, 4) === '6304') {
    if (cardNumber.length >= 12 && cardNumber.length <= 19) {
      return ("Maestro");
    }
  }



// Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.
// Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.



  // Note: `cardNumber` will always be a string


  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
};

// console.log(detectNetwork("38345678901234"));
// console.log(detectNetwork("38345678901234"));
// console.log(detectNetwork("343456789012345"));
// console.log(detectNetwork("4123456789012345678"));
// console.log(detectNetwork("4123456789012"));
// console.log(detectNetwork("4123456789012345"));
// console.log(detectNetwork("4123456789012345678"));
// console.log(detectNetwork("5523345678912345"));
// console.log(detectNetwork('343456789012345'));
console.log(detectNetwork('633110938273625382'));
console.log(detectNetwork('622126823737340283'));


