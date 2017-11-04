chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        chrome.tts.speak("Art expo");
        chrome.tabs.executeScript({
                file: "replaceImage.js"
            });
        console.log(sender.tab ?
            "from a content script:" + sender.tab.url :
            "from the extension");
        if (request.greeting == "hello")
            sendResponse({farewell: "Summary"});
    });