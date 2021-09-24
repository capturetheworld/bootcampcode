var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  someInstance.top = 0;


  // Implement the methods below
  someInstance.push = function(value) {
    if (!value) {
      console.log('input a value to add!');
      return;
    }
    storage[someInstance.top] = value;
    someInstance.top++;
  };

  someInstance.pop = function() {
    if (someInstance.top !== 0) {
      someInstance.top--;
      let toReturn = storage[someInstance.top];
      delete storage[someInstance.top];
      return toReturn;
    }
    return;


  };

  someInstance.size = function() {
    return someInstance.top;
  };

  return someInstance;
};

var testStack = Stack();
testStack.push('a');
testStack.push('b');
testStack.push('c');
console.log(testStack.size());
console.log(testStack.pop());
console.log(testStack.size());
console.log(testStack.pop());
console.log(testStack.pop());
console.log(testStack.pop());
console.log(testStack.pop());

