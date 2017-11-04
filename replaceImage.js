//var watson = require("./imageReconition.js");
removeImages();
       
function removeImages(){
    while(single_run()>0);
}
function single_run() {
    var x = document.getElementsByTagName("img");
    var body = document.getElementsByTagName("body");
 
    for (var i = 0; i < x.length; i++) {
        var plaint = document.createElement("p");
          
        var link = document.URL + x.item(i).getURI();

        plaint.innerHTML = "GREG IS LOVE";
        x.item(i).parentNode.replaceChild(plaint, x.item(i));
     }
     return x.length;
}