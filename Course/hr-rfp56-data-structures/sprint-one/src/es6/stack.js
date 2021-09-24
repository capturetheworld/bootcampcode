class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.top = 0;
  }

  push(value) {
    if (!value) {
      console.log('input a value to add!');
      return;
    }
    this.storage[this.top] = value;
    this.top++;
  }

  pop() {
    if (this.top !== 0) {
      this.top--;
      let toReturn = this.storage[this.top];
      delete this.storage[this.top];
      return toReturn;
    }
  }

  size() {
    return this.top;
  }

}

let aStack = new Stack();