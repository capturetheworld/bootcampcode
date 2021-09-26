// Instantiate a new graph
var Graph = function() {
  this.storage = {};
};

class Node {
  constructor(value) {
    this.edges = [];
    this.value = value;
  }
}
// what we want
// Graph.storage = {
//   100: {id: 001, value: 100, edges: []},
//   200: {id: 002, value: 100, edges: []},
//   300: {value: 300, edges: []}
// };

// this.storage[100] = {value: 100, edges[100, 200, 300]}


// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(key) {
  // console.log("TOADD NODE VALUE: " + node);
  // console.log("CAN WE FIND IT ALREADY?: " + this.contains(node));

  // check for duplicate
  if (!this.contains(key)) {
    var toAdd = new Node(key);
    this.storage[key] = toAdd;
    // console.log(this.storage[node]);
  }
};

// Graph.prototype.print = function() {
//   for (storedValue in this.storage) {
//     console.log(this.storage[storedValue]);
//   }

// };

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(key) {
  let isFound = false;
  for (var storedValue in this.storage) {
    if (parseInt(storedValue) === key) {
      isFound = true;
    }
  }
  return isFound;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  delete this.storage[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  // check if fromNode and toNode are valid
  if (!this.contains(fromNode) || !this.contains(toNode)) {
    return false;
  } else {
  //both are valid nodes
    var connectedNodesviaEdges = this.storage[fromNode].edges;
    for (var i = 0; i < connectedNodesviaEdges.length; i++) {
      if (connectedNodesviaEdges[i] === toNode) {
        return true;
      }
    }
    return false;
  }
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  // check if fromNode and toNode are valid
  if (!this.contains(fromNode) || !this.contains(toNode)) {
    return;
    console.log('ERROR ONE OR MORE NODE NOT FOUND IN GRAPH');
    // throw new Error("")
  }
  this.storage[fromNode].edges.push(toNode);
  this.storage[toNode].edges.push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  // check if fromNode and toNode are valid
  if (!this.contains(fromNode) || !this.contains(toNode)) {
    return false;
  }
  // filter out any edge that is equal to toNode from fromNode.edges
  this.storage[fromNode].edges = this.storage[fromNode].edges.filter(function(edge) {
    return edge !== toNode;
  });

  // filter out any edge that is equal to fromNode from toNode.edges
  this.storage[toNode].edges = this.storage[toNode].edges.filter(function(edge) {
    return edge !== fromNode;
  });
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  // console.log(rest[2]);

  // var graphContext = this;
  //  return (function(){
  for (var storedValue in this.storage) {
    // // cb(parseInt(storedValue));
    // var argumentarr = [];
    // argumentarr.push(parseInt(storedValue));
    // argumentarr.push(...rest);
    cb.call(null, parseInt(storedValue));
  }
//  }());
};



var x = new Graph();

// x.addNode(100);
// x.addNode(200);
// x.addNode(200);
// x.addNode(300);
// x.addEdge(300,200);
// console.log(x.hasEdge(300,200));
// console.log(x.hasEdge(300,400));

// var printtoConsole = function(item) { //cb
//   console.log(item);
// };

// graph.forEachNode('function', 1 ,2 ,3,4);
// // console.log(x.print());

/*
 * Complexity: What is the time complexity of the above functions?
 */


