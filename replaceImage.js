console.log("There was an attempt");

y();

function y(){
    while(x()>0);
}
function x() {
    var x = document.getElementsByTagName("img");
    var body = document.getElementsByTagName("body");
 
    for (var i = 0; i < x.length; i++) {
        var plaint = document.createElement("p");
        plaint.innerHTML = "GREG IS LOVE";

        x.item(i).parentNode.replaceChild(plaint, x.item(i));
        console.log(i);
    }
    console.log("run finished");
    return x.length;
}