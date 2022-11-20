
export var baseDOMFirst = `<div id="virtualDOM">
</div>

<script>
class virtualDOM{

    tagName;
    attributes;
    children;

  constructor(tagName, attributes, children){
    this.tagName = tagName
    this.attributes = attributes
    this.children = children
  }

  // render virtualDOM
  render(){
    // create an element for the node
    let element = document.createElement(this.tagName)
    // set the attributes for the element
    for (let name in this.attributes){
      element.setAttribute(name, this.attributes[name])
    }
    // add children elements
    for(let child of this.children){
      let childElement = child instanceof virtualDOM ? child.render() : document.createTextNode(child)
      element.appendChild(childElement)
    }
    return element
  }
}
`;


export var baseDOMLast = `

// render the node
const root = ul.render()

// append it to the body
document.getElementById("virtualDOM").appendChild(root);

</script>
`

export default class VirtualDOMComposer {

    DOMList = '';

    VDomObj = {};

        constructor(){

        }

        /* the code it generates is like this:
        const ul = new virtualDOM('ul', {class: 'list'}, [
  new virtualDOM('li', {class: 'item'}, ['Item 1']),
  new virtualDOM('li', {class: 'item'}, ['Item 2']),
  new virtualDOM('li', {class: 'item'}, ['Item 3'])
]) */




        getDOMString(){
            return baseDOMFirst + this.DOMList + baseDOMLast;
        }



}
