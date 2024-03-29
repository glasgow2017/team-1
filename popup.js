function getCurrentTabUrl(callback) {
    var queryInfo = {
        active: true,
        currentWindow: true
    };

    chrome.tabs.query(queryInfo, (tabs) => {
        var tab = tabs[0];
        var url = tab.url;
        console.assert(typeof url == 'string');

        callback(url);
    });
}

function runReplaceImage() {
    chrome.tabs.executeScript({
        file: "replaceImage.js"
    });
}

runReplaceImage();

document.addEventListener('DOMContentLoaded', () => {
    getCurrentTabUrl((url) => {
        runReplaceImage();
    });
});