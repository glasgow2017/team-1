//Expects the url of the image
function convertImageToText(imageURLToString) {
    var watson = require('watson-developer-cloud');
    var visual_recgnition = watson.visual_recognition({
        api_key: '{api-key}',
        version_date: '2016-05-20'
    });
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