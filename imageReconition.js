//Expects the url of the image

var fs = require('fs');


var watson = require('watson-developer-cloud');
var visual_recgnition = watson.visual_recognition({
    api_key: '{JV6fK0YispGmC8qKZo0FyNZGZKrq7olmNJ-LEeRO95cQ}',
    version: 'v3',
    version_date: '2016-05-20'
});

function convertImageToText(imageURLToString) {
    var params = {
        image_file: fs.createReadStream(imageURLToString)
    };
    visual_recgnition.classify(params, function (err, res) {
        if (err)
            console.log(err)
        else
            return parseReturnedValue(JSON.stringify(res, null, 2));
    });
}

function parseReturnedValue(jsonReturned) {
    console.log(jsonReturned);
}


convertImageToText('./cat.jpeg');