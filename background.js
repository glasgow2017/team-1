

var assoc = {"instagram":{"desc": "tbc"},"pinterest":{"desc": "tbc2"}};

chrome.runtime.onMessage.addListener(

    function (request, sender, sendResponse) {

        setTimeout(function () {
            chrome.tts.speak()
        }, 10000);
        setTimeout(function () {
            chrome.tabs.executeScript({
                file: "replaceImage.js"
            });
        }, 12000);
        //chrome.tts.speak("Art expooooooooooooooo");
        //
        // console.log(sender.tab ?
        //     "from a content script:" + sender.tab.url :
        //     "from the extension");
            sendResponse({farewell: "Summary"});
    });