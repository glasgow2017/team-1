var globalHatred = "";

function findContext(url4u) {
    var watson_server = new XMLHttpRequest();
    var stringRep = "";
    watson_server.open("POST", "http://localhost:8080/image", false);
    watson_server.setRequestHeader("Content-type", "text/plain");
    watson_server.onreadystatechange = function (x) {
        if (watson_server.readyState == XMLHttpRequest.DONE && watson_server.status == 200) {
            stringRep = (watson_server.responseText);
            //console.log(stringRep);
            globalHatred = stringRep;
            return stringRep;
        }
    };

    watson_server.send(url4u);//This is the error
    return globalHatred;

}

//For some reason, all images are retrieved but they're null after the halfway point. Please ignore this hack.
single_run();

function single_run() {
    var x = document.getElementsByTagName("img");
    var body = document.getElementsByTagName("body");
    var i = 0;

    while (x.length > i) {
        x.item(i).setAttribute("alt", findContext(x.item(i).src));
        i++;
    }

    x = document.getElementsByTagName("button");
    i = 0;
    while (x.length > i) {
        console.log(x.item(i));
        if (x.item(i).getAttribute("title")) {
            if(x.item(i).getAttribute("alt")){
                x.item(i).setAttribute("alt", x.item(i).getAttribute("title") + x.item(i).getAttribute("alt"));
            } else {
                x.item(i).setAttribute("alt", x.item(i).getAttribute("title"));
            }
        }
        i++;
    }
}