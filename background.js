


chrome.runtime.onMessage.addListener(

    function (request, sender, sendResponse) {


        var assoc = {"instagram":"Instagram, welcome ","pinterest":"Pinterest, welcome2", "artweb":"Painters online is an online gallery for art lovers"};
        setTimeout(function () {
            chrome.tts.speak(assoc[request.greeting]);
        }, 10000);
            sendResponse({farewell: assoc[request.greeting]});
    });