var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];
  // .children = [{          }, {}, {}, ...]
  //              children[0]
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // create an obj to store value
  // new passed in value obj.value = value
  // push obj to children
  var toAdd = new Tree(value);
  this.children.push(toAdd);
};

//       blank
//  5       6
// 6  7   8

treeMethods.contains = function(target) {
  var isFound = false;
  // edge case, children is empty
  // if (this.children.length === 0) {
  //   return false;
  // }
  var recursiveFind = function(treeNode) {

    if (treeNode.value === target) {
      isFound = true;
    }

    for (var i = 0; i < treeNode.children.length; i++) {
      recursiveFind(treeNode.children[i]);
    }
  };

  recursiveFind(this);

  return isFound;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
