"use strict";
class Car {
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }
    getInfo() {
        return `Model Name:${this.model} Year:${this.year} `;
    }
}
const Ford = new Car("mustang", 1969);
console.log(Ford.getInfo());
