window.onload=function(){
    chrome.runtime.sendMessage({greeting: "instagram"}, function(response) {
        console.log(response.farewell);
    });
}




