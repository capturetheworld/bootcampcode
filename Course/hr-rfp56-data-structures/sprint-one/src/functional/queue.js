var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  someInstance.head = 0;
  someInstance.tail = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    if (!value) {
      console.log('input a value to add!');
      return;
    }
    someInstance.tail++;
    storage[someInstance.tail] = value;
  };

  someInstance.dequeue = function() {
    if (someInstance.head >= someInstance.tail) {
      return;
    } else {
      someInstance.head++;
      let toReturn = storage[someInstance.head];
      delete storage[someInstance.head];
      return toReturn;

    }
  };

  someInstance.size = function() {
    return someInstance.tail - someInstance.head;
  };

  return someInstance;
};

let testQueuefunc = Queue();
testQueuefunc.enqueue('a');
testQueuefunc.enqueue('b');
testQueuefunc.enqueue('c');
console.log('size is ' + testQueuefunc.size());
console.log(testQueuefunc.dequeue());
console.log('size is ' + testQueuefunc.size());
console.log(testQueuefunc.dequeue());
console.log('size is ' + testQueuefunc.size());
console.log(testQueuefunc.dequeue());
console.log(testQueuefunc.dequeue());
console.log(testQueuefunc.dequeue());
console.log(testQueuefunc.dequeue());
console.log('size is ' + testQueuefunc.size());
testQueuefunc.enqueue('z');
console.log('size is ' + testQueuefunc.size());
console.log(testQueuefunc.dequeue());
console.log('size is ' + testQueuefunc.size());


