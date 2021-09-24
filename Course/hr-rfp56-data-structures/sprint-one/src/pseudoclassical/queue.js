var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.head = 0;
  this.tail = 0;
};

Queue.prototype.enqueue = function(value) {
  if (!value) {
    console.log('input a value to add!');
    return;
  }
  this.tail++;
  this.storage[this.tail] = value;
};


Queue.prototype.dequeue = function() {
  if (this.head >= this.tail) {
    return;
  } else {
    this.head++;
    let toReturn = this.storage[this.head];
    delete this.storage[this.head];
    return toReturn;

  }
};

Queue.prototype.size = function() {
  return this.tail - this.head;
};


var Grace = new Queue();

