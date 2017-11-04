//Expects the url of the image
const express = require('express');

var cors = require('cors');

const app = express();

app.use(cors())

var watson = require('watson-developer-cloud');
var visual_recgnition = watson.visual_recognition({
    api_key: '29473d2dd44e89a41580ce0d803fac7421910d74',
    version: 'v3',
    version_date: '2016-05-20'
});
//
// var Promise = require();

var http = require('http');

app.get('/', function (req, res) {
    console.log(req);
    convertImageToText('http://cdn3-www.dogtime.com/assets/uploads/gallery/' +
        'airedale-terrier-dog-breed-pictures/1-play.jpg', callback, res);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    // res.end('Server listening on port 8080');
}).listen(8080);

console.log('Server listening on port 8080')

function callback(str, res){
    res.end(str);
}

convertImageToText = function (imageURLToString, callback, res) {

    visual_recgnition.classify({url:imageURLToString}, function (err, resp) {
        if (err)
            console.log(err);
        else
            callback(parseReturnedValue(resp), res);//JSON.stringify(res, null, 2));
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
    console.log(str);
    return str;
}





