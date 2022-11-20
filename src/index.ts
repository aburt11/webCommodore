

import * as jsdom from 'jsdom';

const { JSDOM } = jsdom;
const express = require('express');

var htmlView;

async function main(){

var url = 'https://apps.apple.com/us/app/air-transfer-file-transfer-from-to-pc-thru-wifi/id521595136';

const virtualConsole = new jsdom.VirtualConsole({captureRejections:false});

virtualConsole.on("error", () => { console.log("error:") });
virtualConsole.on("warn", () => { console.log("error:") });
virtualConsole.on("info", () => {console.log("error:") });
virtualConsole.on("dir", () => { console.log("error:") });




var vDOM = await JSDOM.fromURL(url, { runScripts: 'dangerously', resources: 'usable', pretendToBeVisual: true, virtualConsole });
console.log("PAGE FETCHED \n", vDOM);

virtualConsole.sendTo(null, { omitJSDOMErrors: true,  });



    console.log("DOM CREATED \n", vDOM.window.document);

    const links = vDOM.window.document.querySelectorAll('p');

    console.log("  P ELES \n", links);

    var urls = [];
    for (let link of links) {
        urls.push(link.innerHTML);
    }

    console.log("LINKS FROM SITE ",urls);

    htmlView = vDOM.serialize();

    return;


}

main();

const app = express();
const port = process.env.PORT || 8080;

app.listen(port);
console.log('Server started at http://localhost:' + port);

// sendFile will go here
app.get('/', function(req, res, next) {
    console.log("SENDING HTML",req,res,next);
    res.send(htmlView);
})
