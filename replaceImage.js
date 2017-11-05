var globalHatred = "";

function findUnknownContext(url4u, type_of_request) {
    var watson_server = new XMLHttpRequest();
    var stringRep = "";
    watson_server.open("POST", type_of_request, false);
    watson_server.setRequestHeader("Content-type", "text/plain");
    watson_server.onreadystatechange = function (x) {
        if (watson_server.readyState == XMLHttpRequest.DONE && watson_server.status == 200) {
            stringRep = (watson_server.responseText);
            console.log(stringRep);
            globalHatred = stringRep;
            return stringRep;
        }
    };

    watson_server.send(type_of_request);
    watson_server.send(url4u);//This is the error
    return globalHatred;
}

function findSecureContext(url4u){
    return findContext(url4u, "https", url4u);
}
function findContext(url4u){
    return findUnknownContext(url4u, "http",url4u);
}
//For some reason, all images are retrieved but they're null after the halfway point. Please ignore this hack.
single_run();

function single_run() {
    var x = document.getElementsByTagName("img");
    var body = document.getElementsByTagName("body");
   
    for (var i=0;i<x.length;i++) {
        x.item(i).setAttribute("alt", findContext(x.item(i).src)); 
    }
}

function addTitleToAltButton(){
    var x = document.getElementsByTagName("button");
     
    for(var i=0;i<x.length;i++)  { 
        if (x.item(i).getAttribute("title")) {
            if(x.item(i).getAttribute("alt")){
                x.item(i).setAttribute("alt", x.item(i).getAttribute("title") + x.item(i).getAttribute("alt"));
           } else {
                x.item(i).setAttribute("alt", x.item(i).getAttribute("title"));
            }
        }
      }
}
 
