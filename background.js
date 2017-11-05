


chrome.runtime.onMessage.addListener(

    function (request, sender, sendResponse) {


        var assoc = {"instagram":"Instagram, welcome ","pinterest":"Pinterest, welcome2", "artweb":"Art Web, this is art"};
        setTimeout(function () {
            chrome.tts.speak(assoc[request.greeting])
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
            sendResponse({farewell: assoc[request.greeting]});
    });