// https://tamberg.mit-license.org/

const RaspiCam = require("raspicam");

const cam = new RaspiCam({
    mode: "photo",
    output: "./photo.jpg"
});

cam.start();

