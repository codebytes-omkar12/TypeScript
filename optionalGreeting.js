"use strict";
function optionalGreet(name, age) {
    if (age !== undefined) {
        return `Hello ${name} Good Morning,you are ${age} young`;
    }
    else {
        return `hi ${name}`;
    }
}
// console.log(optionalGreet("Omkar",21));
console.log(optionalGreet("Pragya"));
