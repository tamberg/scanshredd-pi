// https://tamberg.mit-license.org/

const gpio = require("rpi-gpio");

const led_pin = 16;

gpio.setMode(gpio.MODE_BCM);
gpio.setup(led_pin, gpio.DIR_OUT, gpio.EDGE_BOTH);

value = false;

function toggle() {
    gpio.write(led_pin, value);
    value = !value;
}

setInterval(toggle, 1000);
