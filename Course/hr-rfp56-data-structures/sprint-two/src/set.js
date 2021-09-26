var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = []; // fix me
  return set;
};

var setPrototype = {};

//O(N)
setPrototype.add = function(item) {
  if (!typeof item === 'string') {
    return;
  }
  if (!this.contains(item)) {
    this._storage.push(item);
  }
};


//O(N)
setPrototype.contains = function(item) {
  let match = false;
  for (foundItem in this._storage) {
    // console.log(foundItem);
    if (this._storage[foundItem] === item) {
      match = true;
    }
  }
  return match;
};


//O(N)
setPrototype.remove = function(item) {
  this._storage = this._storage.filter(function(element) {
    return element !== item;
  });
};

// let testSet = new Set();
// testSet.add("hello");
// testSet.add("two");
// testSet.add("three");

// console.log(testSet.contains("two"));

// /*
//  * Complexity: What is the time complexity of the above functions?
//  */
