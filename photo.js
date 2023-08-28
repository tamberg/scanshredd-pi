// https://tamberg.mit-license.org/

const RaspiCam = require("raspicam");

const cam = new RaspiCam({
    mode: "photo",
    output: "./photo.png",
    e: "png"
});

cam.start();

