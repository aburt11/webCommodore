

import * as jsdom from 'jsdom';

const { JSDOM } = jsdom;
const express = require('express');

//import CommodoreUI from './recorder';

var htmlView;


async function main(){

var url = 'https://domain.com.au/';



const virtualConsole = new jsdom.VirtualConsole({captureRejections:true});


var vDOM = await JSDOM.fromURL(url, { runScripts: 'dangerously', includeNodeLocations:true , pretendToBeVisual: false, virtualConsole: virtualConsole });
console.log("PAGE FETCHED \n", vDOM);


virtualConsole.on('jsdomError', (error) => {
    console.log("ERROR: ", error);
});


 //   console.log("DOM CREATED \n", vDOM.window.document);

    const links = vDOM.window.document.querySelectorAll('p');

    console.log("  P ELES \n", links);

    var urls = [];
    for (let link of links) {
        urls.push(link.innerHTML);
    }



 var scriptSRC = `
  class WebWindow {

    constructor(div_id) {
        this.div_id = div_id;
        this.ClickedElements = [];
    }


    render() {

        let div_id = this.div_id;
        let ClickedElements = this.ClickedElements;

        document.createElement('div', {
            id: div_id
        });

        let div = document.querySelector('body');

        let button = document.createElement('button');
        button.innerHTML = 'Start Recording';
        button.style.position = 'absolute';
        button.style.top = '20px';
        button.style.left = '20px';
        button.style.backgroundColor = '#2196F3';
        button.style.color = 'white';
        button.style.padding = '20px';
        button.style.border = 'none';
        button.style.fontSize = '20px';
        button.style.cursor = 'pointer';
        button.style.zIndex = '9999';
        button.style.margin = '10px';
        button.style.borderRadius = '10px';
        button.style.boxShadow = '0px 0px 5px 0px rgba(0,0,0,0.2)';

        div.parentNode.insertBefore(button, div.nextSibling);

        button.onclick = function () {
            if (button.innerHTML == 'Start Recording') {
                button.innerHTML = 'Stop Recording';
                button.style.backgroundColor = '#F44336';

                window.onmouseover = function (event) {
                    if (event.target.style.backgroundColor != 'yellow') {
                        event.target.style.backgroundColor = 'yellow';
                    }
                };

                window.onmouseout = function (event) {
                    event.target.style.backgroundColor = '';
                };

                window.onclick = function (event) {
                    event.preventDefault();
                    ClickedElements.push(event.target);
                    console.log(ClickedElements);
                };
            } else {
                button.innerHTML = 'Start Recording';
                button.style.backgroundColor = '#2196F3';

                window.onmouseover = null;
                window.onmouseout = null;
                window.onclick = null;
            }
        };
    }
}


var webWindow = new WebWindow('body');
webWindow.render();
`;


    var script = vDOM.window.document.createElement('script');
    script.innerHTML = scriptSRC;

vDOM.window.document.querySelector('body').appendChild(script);


   // console.log("LINKS FROM SITE ",urls);



    htmlView = vDOM.serialize();

    console.log("HTML VIEW ", htmlView);

 //  console.log("VDOM ", vDOM);

   // var commie = new CommodoreUI(htmlView);



 return;

}

main();

const app = express();
const port = process.env.PORT || 8080;

var virtualDOMUI = `
<div id="virtualDOM">
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

const ul = new virtualDOM('ul', {class: 'list'}, [
  new virtualDOM('li', {class: 'item'}, ['Item 1']),
  new virtualDOM('li', {class: 'item'}, ['Item 2']),
  new virtualDOM('li', {class: 'item'}, ['Item 3'])
])

// render the node
const root = ul.render()

// append it to the body
document.getElementById("virtualDOM").appendChild(root);

</script>
`;

app.listen(port);
console.log('Server started at http://localhost:' + port);

// sendFile will go here
app.get('/', function(req, res, next) {
    console.log("SENDING HTML",req,res,next);
    res.send(htmlView);
})

app.get('/ui', function(req, res, next) {
    console.log("SENDING UI",req,res,next);
    res.send(virtualDOMUI);
})
