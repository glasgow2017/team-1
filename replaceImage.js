y();

function y(){
    while(x()>0);
}
function x() {
    var x = document.getElementsByTagName("img");
    var newSpan = document.createElement("span");
    newSpan.innerHTML = "blaaaaaaaaaaah";
    var body = document.getElementsByTagName("body");

    for (var i = 0; i < x.length; i++) {
        var plaint = document.createElement("p");
        plaint.innerHTML = "Greg";

        console.log(x.item(i).innerHTML);
        x.item(i).parentNode.replaceChild(plaint, x.item(i));
        console.log(i);
    }
    console.log("run finished");
    return x.length;
}