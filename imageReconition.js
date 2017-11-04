//Expects the url of the image

var fs = require('fs');

var watson = require('watson-developer-cloud');
var visual_recgnition = watson.visual_recognition({
    api_key: './apiKey.json',
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

function getImageFromURL(url){
    var urlParse = url.split("/")
    return request(url).pipe(fs.createReadStream(urlParse[urlParse.size - 1]));
}


convertImageToText('http://cdn3-www.dogtime.com/assets/uploads/gallery/airedale-terrier-dog-breed-pictures/1-play.jpg');