
function findContext(url4u){
    var watson_server = new XMLHttpRequest();
    var stringRep = "";
    watson_server.open("POST", "http://localhost:8080/image", false);
    watson_server.setRequestHeader("Content-type","text/plain");
    watson_server.onreadystatechange = function(x){
        if(watson_server.readyState == XMLHttpRequest.DONE && watson_server.status == 200){
            stringRep = (watson_server.responseText);
            console.log(stringRep);
            return stringRep;
        }
    };

    return watson_server.send(url4u);//This is the error

}
//For some reason, all images are retrieved but they're null after the halfway point. Please ignore this hack.
single_run();

function single_run() {
    var x = document.getElementsByTagName("img");
    var body = document.getElementsByTagName("body");
    console.log("1");
    
    while(x.length>0) {
            var plaint = document.createElement("p");
            console.log(x.item(0).src);
            //plaint.innerHTML =  findContext(x.item(0).src);
            console.log(findContext(x.item(0).src));
            x.item(0).parentNode.replaceChild(plaint, x.item(0));
         }
     return x.length;
}