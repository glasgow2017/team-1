var x = document.getElementsByTagName("p");

for (var i = 0; i < x.length; i++) {
    var plaint = document.createElement("p");
    plaint.innerText =  "Greg";

    x.item(i).parentNode.replaceChild(plaint, x.item(i));
    console.log(i);
}
