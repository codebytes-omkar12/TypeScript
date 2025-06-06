"use strict";
class Clock {
    constructor(make) {
        this.make = make;
    }
    start() {
        console.log(`this is ${this.make}`);
    }
}
const rolex = new Clock('1969');
rolex.start();
