"use strict";
class Device {
    constructor(brand) {
        this.brand = brand;
    }
}
class Laptop extends Device {
    getDetails() {
        return `Laptop brand is: ${this.brand}`;
    }
}
const Acer = new Laptop("Acer");
console.log(Acer.getDetails());
