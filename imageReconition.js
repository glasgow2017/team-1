//Expects the url of the image
var request=require('request');
var fs = require('fs');
var watson = require('watson-developer-cloud');
var visual_recgnition = watson.visual_recognition({
    api_key: '29473d2dd44e89a41580ce0d803fac7421910d74',
    version: 'v3',
    version_date: '2016-05-20'
});


function convertImageToText(imageURLToString) {
    var params = {
        image_file: fs.createReadStream(imageURLToString)
    };
    visual_recgnition.classify(params, function (err, res) {
        if (err)
            console.log(err);
        else
            return parseReturnedValue(res);//JSON.stringify(res, null, 2));
    });
}

function parseReturnedValue(response) {
    console.log(JSON.stringify(response, null, 2));
    var str = "This is a picture of";
    console.log(JSON.stringify(response.images[0].classifiers[0].classes));
    for (item in response.images[0].classifiers[0].classes){
        console.log(JSON.stringify(response.images[0].classifiers[0].classes[item].class, null, 2));
        str += " " + response.images[0].classifiers[0].classes[item].class;
    }
    return str;
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


convertImageToText('./paintingAbstract.jpg');

