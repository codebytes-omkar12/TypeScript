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
