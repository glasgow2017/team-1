function getCurrentTabUrl(callback) {
    var queryInfo = {
        active: true,
        currentWindow: true
    };

    chrome.tabs.query(queryInfo, (tabs) => {
        var tab = tabs[0];

        var url = tab.url;


        callback(url);
    });

    function runReplaceImage() {
        chrome.tabs.executeScript({
            file: 'replaceImage.js'
        });
    }

    document.addEventListener('DOMContentLoaded', () => {
        getCurrentTabUrl((url) => {
            runReplaceImage();
        });
    })
