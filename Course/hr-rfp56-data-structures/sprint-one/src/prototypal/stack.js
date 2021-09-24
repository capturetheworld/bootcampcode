var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = Object.create(stackMethods);
  newStack.top = 0;
  newStack.storage = {};
  return newStack;
};


var stackMethods = {
  push: function(value) {
    if (!value) {
      console.log('input a value to add!');
      return;
    }
    this.storage[this.top] = value;
    this.top++;
    return;
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
  }
}; //prototype stack methods object





var testStack3 = Stack();
testStack3.push('a');
testStack3.push('b');
testStack3.push('c');
console.log(testStack3.size());
console.log(testStack3.pop());
console.log(testStack3.size());
console.log(testStack3.pop());
console.log(testStack3.pop());
console.log(testStack3.pop());
console.log(testStack3.pop());