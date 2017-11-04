
removeImages();
       
function removeImages(){
    while(single_run()>0);
}
function single_run() {
    var x = document.getElementsByTagName("img");
    var body = document.getElementsByTagName("body");
 
    for (var i = 0; i < x.length; i++) {
        var plaint = document.createElement("p");
          
        console.log("Maybe it isn't elementary");

        plaint.innerHTML = "GREG IS LOVE";
        x.item(i).parentNode.replaceChild(plaint, x.item(i));
     }
     return x.length;
}