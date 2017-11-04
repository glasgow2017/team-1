

var watson_server = new XMLHttpRequest();

watson_server.open("POST", "http://localhost:8080", true);
watson_server.setRequestHeader("Content-type","application/json");

watson_server.onreadystatechange = function(x){
    if(watson_server.readyState == XMLHttpRequest.DONE && watson_server.status == 200){
        console.log(watson_server.responseText);
             
    }
}

watson_server.send({sending:"yes"});


//For some reason, all images are retrieved but they're null after the halfway point. Please ignore this hack.
single_run();

function single_run() {
    var x = document.getElementsByTagName("img");
    var body = document.getElementsByTagName("body");

    while(x.length>0) {
             var plaint = document.createElement("p");
            plaint.innerHTML = "GREG IS LOVE";
            x.item(0).parentNode.replaceChild(plaint, x.item(0));
         }
     return x.length;
}