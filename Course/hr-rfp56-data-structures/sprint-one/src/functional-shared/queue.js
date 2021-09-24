var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var aqueue = {
    'storage': {},
    'head': 0,
    'tail': 0
  };
  _.extend(aqueue, queueMethods);

  return aqueue;

};

var queueMethods = {
  enqueue: function(value) {
    if (!value) {
      console.log('input a value to add!');
      return;
    }
    this.tail++;
    this.storage[this.tail] = value;
  },

  dequeue: function() {
    if (this.head >= this.tail) {
      return;
    } else {
      this.head++;
      let toReturn = this.storage[this.head];
      delete this.storage[this.head];
      return toReturn;
    }
  },

  size: function() {
    return this.tail - this.head;
  }

};


let testQueue = Queue();
testQueue.enqueue('a');
testQueue.enqueue('b');
testQueue.enqueue('c');
console.log('size is ' + testQueue.size());
console.log(testQueue.dequeue());
console.log('size is ' + testQueue.size());
console.log(testQueue.dequeue());
console.log('size is ' + testQueue.size());
console.log(testQueue.dequeue());
console.log(testQueue.dequeue());
console.log(testQueue.dequeue());
console.log(testQueue.dequeue());
console.log('size is ' + testQueue.size());
testQueue.enqueue('z');
console.log('size is ' + testQueue.size());
console.log(testQueue.dequeue());
console.log('size is ' + testQueue.size());
