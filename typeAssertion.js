"use strict";
function allCapital(value) {
    if (typeof value === "string") { //extra layer of safety
        return value.toUpperCase();
    }
    return "not a string";
}
console.log(allCapital("melloBello"));
console.log(allCapital(1234));
