var watson = require('watson-developer-cloud');
var visual_recgnition = watson.visual_recognition({
    api_key: '{api-key}',
    version_date: '2016-05-20'
});
//Expects the url of the image
function convertImageToText(imageURLToString){
    return "Yeah you called right";
}