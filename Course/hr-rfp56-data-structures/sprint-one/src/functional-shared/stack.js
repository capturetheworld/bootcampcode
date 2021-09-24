var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var astack = {
    'storage': {},
    'top': 0
  };

  _.extend(astack, stackMethods);

  return astack;

};

var stackMethods = {
  push: function(value) {
    if (!value) {
      console.log('input a value to add!');
      return;
    }
    this.storage[this.top] = value;
    this.top++;
  },

  pop: function() {
    if (this.top !== 0) {
      this.top--;
      let toReturn = this.storage[this.top];
      delete this.storage[this.top];
      return toReturn;
    }
    return;


  },

  size: function() {
    return this.top;
  },
};




let testStack = Stack();
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
