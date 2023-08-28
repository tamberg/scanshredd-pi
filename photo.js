// https://tamberg.mit-license.org/

const RaspiCam = require("raspicam");

const cam = new RaspiCam({
    mode: "photo",
    output: "./photo.png",
    width: 1920,
    height: 1080,
    rotation: 90,
    encoding: "png"
});

cam.start();

