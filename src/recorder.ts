// create a function that generates a reactive user interface with a record button
// and a stop button
// in the user interface there is a div with the id of "commodoreWindow"
// in the div there is a button with the id of "recordButton" sowing on top of the div in the bottom right hand corner
// in the div there is a button with the id of "stopButton" sowing on top of the div in the bottom left hand corner
// the div "commodoreWindow" has a width of 100% and a height of 100%
// the button "recordButton" has a width of 100px and a height of 100px
// the button "stopButton" has a width of 100px and a height of 100px
// the button "recordButton" has a background color of red
// the button "stopButton" has a background color of green
// the button "recordButton" has a border radius of 50%
// the button "stopButton" has a border radius of 50%
// the div "commodoreWindow" will render a window object as a virtual DOM inside the real DOM
// inside the "commodoreWindow" virtual DOM, on mouse hover of each element, the element will be highlighted, on mouse out the element will be unhighlighted
// inside the "commodoreWindow" virtual DOM, on mouse click of each element, the element will be highlighted in red with a number assigned to it in the top left hand corner of the div border, and the element will be pushed to an array

export default class CommodoreUI{

    htmlView;

    uiDOM;
    constructor(htmlView){

        this.htmlView = htmlView;

        this.uiDOM = document.implementation.createHTMLDocument().body;
    }

    recordButton() {
    var recordButton = this.uiDOM.createElement("button");
    recordButton.id = "recordButton";
    recordButton.style.width = "100px";
    recordButton.style.height = "100px";
    recordButton.style.backgroundColor = "red";
    recordButton.style.borderRadius = "50%";

    recordButton.onclick = function() {
        console.log("RECORDING");
    }

    this.uiDOM.body.appendChild(recordButton);
    return recordButton;
}

 stopButton() {
    var stopButton = this.uiDOM.createElement("button");
    stopButton.id = "stopButton";
    stopButton.style.width = "100px";
    stopButton.style.height = "100px";
    stopButton.style.backgroundColor = "green";
    stopButton.style.borderRadius = "50%";

    stopButton.onclick = function() {
        console.log("STOPPING");
    }


    this.uiDOM.body.appendChild(stopButton);
    return stopButton;
}

 commodoreWindow(htmlView) {
    var commodoreWindow = this.uiDOM.createElement("div");
    commodoreWindow = htmlView;
    commodoreWindow.id = "commodoreWindow";
    commodoreWindow.style.width = "100%";
    commodoreWindow.style.height = "100%";

    this.uiDOM.body.appendChild(commodoreWindow);
    return commodoreWindow;
}

 createUI() {
    this.recordButton();
     this.stopButton();
  this.commodoreWindow(this.htmlView);

  return this.uiDOM;
}




}


