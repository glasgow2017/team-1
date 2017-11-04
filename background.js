
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        setTimeout(function () {
            chrome.tts.speak("This is a beautiful art page")
        }, 10000);
        setTimeout(function () {
            chrome.tabs.executeScript({
                file: "replaceImage.js"
            });
        }, 12000);
        //chrome.tts.speak("Art expooooooooooooooo");

        console.log(sender.tab ?
            "from a content script:" + sender.tab.url :
            "from the extension");
        if (request.greeting == "hello")
            sendResponse({farewell: "Summary"});
    });