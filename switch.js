// https://tamberg.mit-license.org/

const gpio = require("rpi-gpio");

const btn_pin = 5;
const led_pin = 16;

gpio.setMode(gpio.MODE_BCM);
gpio.setup(btn_pin, gpio.DIR_IN, gpio.EDGE_BOTH);
gpio.setup(led_pin, gpio.DIR_OUT, gpio.EDGE_BOTH);

gpio.on("change", (pin, value) => {
    console.log("pin " + pin + ": " + value);
    gpio.write(led_pin, value);
});

console.log("watching pin " + btn_pin + "...");
