window.onload=function(){
    chrome.runtime.sendMessage({greeting: "artweb"}, function(response) {
        console.log(response.farewell);
    });
}