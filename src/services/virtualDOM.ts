
/*
export default class virtualDOM {

    constructor(){

    }


    // 4 functions for the main parts of the VDOM
// function to create the virtual DOM object
 h(type, props, ...children) {
  return { type, props, children };
}

// function that turns the VDOM object into an actual DOM element
 createElement(node) {
  // get HTML element from node type
  const testElement = document.createElement(node.type);

  if (typeof node === 'string') {
    return document.createTextNode(node);
  }
  // recursive case:
   // if node children is defined, recurse the node children and appead to testElement
   // base case happens when no more children are found
  if (node.children !== undefined) {
    for (let i = 0; i < node.children.length; i += 1) {
        testElement.appendChild(this.createElement(node.children[i]));
    }
  }
 // set attribute test
 // check if node has props property & set the attribute into testElement
  if(node.props){
    for (let key in node.props) {
      testElement.setAttribute(key, node.props[key]);
    }
  }
  return testElement;
}

// function diffing alogrithm that compares and returns the difference
 changed(node1, node2) {
 return typeof node1 !== typeof node2 ||
   (typeof node1 === 'string' && node1 !== node2) ||
   node1.type !== node2.type;
}

// function that makes the update to the actual DOM
 updateElement(target, newNode, oldNode) {
  const oldNodeElement = this.createElement(oldNode);

  //remove target children if there is a change in the children
  for (let i = target.children.length -1; i >= 0; i -= 1) {
  //cycle through target children and oldNode children
    oldNode.children.some((child) => {
      console.log("oldNode ", child);
      if (this.changed(target.children[i], oldNodeElement.child)) {
        //console.log("changed ", changed(target.children[i], oldNodeElement.child));
        //remove from target
        target.removeChild(target.children[i]);
        return true;
      }
    });
  }

  //cycle through new node children and append to target
  for (i=0; i < newNode.children.length; i += 1) {
    target.append(this.createElement(newNode.children[i]));
  }

  // check if properties have changed for each newNode props
  for (let props in newNode.props) {
    // if newnode and oldnode props equal, remove old attributes from target
    if (newNode.props === oldNode.props) {
      // remove old atributes from target
      target.removeAttribute(newNode.props);
    } else { // else newnode and oldnode props equal, remove old attributes from target
      // add new attributes to target from newNode props
      target.setAttribute(props, newNode.props[props]);
    }
  }
  return target;
}



}

*/
