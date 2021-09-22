// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };


// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var elements = [];

  var recursiveFind = function(node) {
    if (node.classList && node.classList.contains(className)) {
      elements.push(node);
    }

    for (var i = 0; i < node.childNodes.length; i++) {
      recursiveFind(node.childNodes[i]);
    }
  };

  recursiveFind(document.body);

  return elements;
};

