var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  // O(1)
  list.addToTail = function(value) {
    var node = new Node(value);
    if (list.head === null) {
      list.head = node;
      list.tail = node;
    } else {
      list.tail.next = node;
      list.tail = node;
    }
  };

  // O(1)
  list.removeHead = function() {
    if (list.head === null) {
      return;
    } else if (list.head.next === list.tail) {
      var temp = list.head;
      list.head.next = null;
      list.head = list.tail;
      return temp.value;
    } else {
      var temp = list.head;
      list.head = list.head.next;
      temp.next = null;
      return temp.value;
    }
  };

  // O(n)
  list.contains = function(target) {
    var currentNode = list.head;
    while (currentNode.value !== target) {
      if (currentNode === list.tail) {
        return false;
      }
      currentNode = currentNode.next;
    }
    return true;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
