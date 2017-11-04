y();

function y(){
    while(x()>0);
}
function x() {
    var x = document.getElementsByTagName("img");
    var body = document.getElementsByTagName("body");
    var watson =  requires("imageReconition.js");
    if(watson==null)
        console.log("Maybe it isn't elementary");

    for (var i = 0; i < x.length; i++) {
        var plaint = document.createElement("p");
        plaint.innerHTML = watson.convertImageToString(document.URL + x.item(i).baseURI);

        x.item(i).parentNode.replaceChild(plaint, x.item(i));
        console.log(i);
    }
    console.log("run finished");
    return x.length;
}