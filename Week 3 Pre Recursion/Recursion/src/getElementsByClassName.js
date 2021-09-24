// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

//Node.childNodes read-only property returns a live NodeList of child nodes
//Document.body const objRef = document.body
//Element.classList collection of the class attributes of the element

var html;
let toReturn = [];
// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  toReturn = [];
  // your code here

  html = document.body;

  recursiveFind(html,className);

  return(toReturn);
};

var recursiveFind = function(node, className){
  if(node.classList && node.classList.contains(className)){
    //no child, current node is a class to be added
    toReturn.push(node);
  }

  if(node.hasChildNodes()){
    for (var i = 0; i < node.childNodes.length; i++) {
      recursiveFind(node.childNodes[i], className);
  }
  }




};