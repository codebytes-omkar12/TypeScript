"use strict";
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    getArea() {
        return Circle.PI * (this.radius) * (this.radius);
    }
}
Circle.PI = 3.14;
const gol = new Circle(5);
console.log(gol.getArea());
//Class Inheritance 
class veichle {
    constructor(brand, year) {
        this.brand = brand;
        this.year = year;
    }
    start() {
        return `Veichle Started`;
    }
}
class car extends veichle {
    drive() {
        return `Car is Driving`;
    }
}
const ford = new car("ford", 1971);
console.log(ford.start());
console.log(ford.drive());
