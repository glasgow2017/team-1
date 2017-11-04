//Expects the url of the image

var fs = require('fs');
var watson = require('watson-developer-cloud');
var visual_recgnition = watson.visual_recognition({
    api_key: '29473d2dd44e89a41580ce0d803fac7421910d74',
    version: 'v3',
    version_date: '2016-05-20'
});


function convertImageToText(imageURLToString) {
    var params = {
        image_file: getImageFromURL(imageURLToString)
    };
    visual_recgnition.classify(params, function (err, res) {
        if (err)
            console.log(err);
        else
            return parseReturnedValue(JSON.stringify(res, null, 2));
    });
}

function parseReturnedValue(jsonReturned) {
    console.log(jsonReturned);
}

function getImageFromURL(url){
    var urlParse = url.split("/")
    console.log(url);
    console.log(urlParse[urlParse.length - 1]);
    var x =request(url, function (err, resp, body){
        console.log(body);
        return (fs.createReadStream(urlParse[urlParse.length - 1]));
    });
}


convertImageToText('./cat.jpeg');

