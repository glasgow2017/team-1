window.onload=function(){
    chrome.runtime.sendMessage({greeting: "pinterest"}, function(response) {
        console.log(response.farewell);
    });
}