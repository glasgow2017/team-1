//Expects the url of the image
const express = require('express');
const app = express();
var cors = require('cors');
var bodyParser = require('body-parser');
var http = require('http');
var https = require('https');
var watson = require('watson-developer-cloud');
 
var uploadRouter = express.Router(); 

app.use(cors());
app.use(bodyParser.text());

var visual_recgnition = watson.visual_recognition({
    api_key: 'c7eb8176527c1a03b8253f074a6034d9465ec972',
    version: 'v3',
    version_date: '2016-05-20'
});
 

uploadRouter.post('/', function (req, res) {
    console.log(req.body);
    convertImageToText(req.body, function (ress){ress.end(str);}, res);
    res.writeHead(200, {'Content-Type': 'text/plain'});
  });

app.listen(8080);
app.use('/image', uploadRouter);
 
convertImageToText = function (imageURLToString, callback, res) {
    visual_recgnition.classify({url:imageURLToString}, function (err, resp) {
        if (err)
            console.log(err);
        else
            callback(parseReturnedValue(resp), res); 
    });
}

function parseReturnedValue(response) {
     var str = "";
     var simplifier = response.images[0].classifiers[0].classes;
     for (item in simplifier){
        if(simplifier[item].score > 0.6) {
            str += " " + simplifier[item].class;
        }
    }
    str = "This is a picture of" + makeUnderstandableString(str);
    return str;
}

function makeUnderstandableString(string){
    var strSplit = string.split(" ");
    for(var i = 0; i < strSplit.length; i ++){
        for(var k = 0; k < strSplit.length; k ++){
            if(!(i === k)){
                if(strSplit[i] === strSplit[k]){
                    strSplit[k] = "";
                }
            }
        }
    }
    var returnable = "";
    for(var i = 0; i < strSplit.length; i ++){
        if(!(strSplit[i] === ""))
        returnable += " " + strSplit[i];
    }
    return returnable;
}
