window.onload=function(){
    var x = document.getElementsByTagName("META");
    var txt = "";
    var i;
    console.log("x: " + x.length);
    for (i = 0; i < x.length; i++) {
        console.log("x: ", x[i]);
        if(x[i].name === "description"){
            txt = x[i].content;
        }
    }

    if(txt === ""){
        txt = "This page has no description.";
    }
    chrome.runtime.sendMessage({greeting: txt}, function(response) {
        console.log(response.farewell);
    });
}




