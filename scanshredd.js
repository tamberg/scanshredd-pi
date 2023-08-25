// https://tamberg.mit-license.org/

const gpio = require("rpi-gpio");
const RaspiCam = require("raspicam");

const cam = new RaspiCam({
    mode: "photo",
    output: "./photo.jpg"
});

const btn_pin = 5;
const led_pin = 16;

gpio.setMode(gpio.MODE_BCM);
gpio.setup(btn_pin, gpio.DIR_IN, gpio.EDGE_BOTH);
gpio.setup(led_pin, gpio.DIR_OUT, gpio.EDGE_BOTH);

cam.on("start", () => {
    console.log("cam starting...");
    gpio.write(led_pin, true);
});

cam.on("read", (err, timestamp, filename) => {
    console.log("cam read " + filename + ", t = " + timestamp + " s.");
    gpio.write(led_pin, false);
});

gpio.on("change", (pin, value) => {
    console.log("pin " + pin + ": " + value);
    if (pin == btn_pin && value == true) {
        cam.start();
    }
});

console.log("watching pins...");
