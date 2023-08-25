// Based on code licensed ? by Peter Auchli

var fs = require('fs');
var request = require('request').defaults({ maxRedirects: 4 });

function savePhotoOnline() {
    var formData = {
        upfile: fs.createReadStream("/home/pi/photo.jpg"),
    };
    var x = {
        //url: 'http://barry.museum/photoboothupload.php',
        url: 'https://partydesjahres.ch/nichts/photobooth.php',
        formData: formData
    }
    request.post(x, (err, httpResponse, body) => {
        if (err) {
            return console.error('upload failed:', err);
        }
        console.log('Upload successful!  Server responded with:', body);
    });
}

savePhotoOnline();
