// Based on code licensed ? by Peter Auchli

var fs = require('fs');
var request = require('request').defaults({ maxRedirects: 4 });

function savePhotoOnline() {
    var formData = {
        upfile: fs.createReadStream("/home/pi/photo.png"),
    };
    var x = {
        url: 'https://partydesjahres.ch/nichts/photoboothupload.php',
        formData: formData
    }
    request.post(x, (err, httpResponse, body) => {
        if (err) {
            return console.error('Request failed with:', err);
        }
        console.log('Server responded with:', body);
    });
}

savePhotoOnline();
