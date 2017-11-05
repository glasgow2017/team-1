chrome.runtime.onMessage.addListener(

    function (request, sender, sendResponse) {

        var assoc = {"instagram":"Instagram, welcome ","pinterest":"Pinterest, welcome2", "artweb":"Art Web, this is art"};
        setTimeout(function () {
            chrome.tts.speak(assoc[request.greeting]);
        }, 1);
            sendResponse({farewell: assoc[request.greeting]});
    });