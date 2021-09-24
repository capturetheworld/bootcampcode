class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.head = 0;
    this.tail = 0;

  }

  enqueue(value) {
    if (!value) {
      console.log('input a value to add!');
      return;
    }
    this.tail++;
    this.storage[this.tail] = value;
  }

  dequeue() {
    if (this.head >= this.tail) {
      return;
    } else {
      this.head++;
      let toReturn = this.storage[this.head];
      delete this.storage[this.head];
      return toReturn;

    }
  }

  size() {
    return this.tail - this.head;
  }

}


var Grace = new Queue();