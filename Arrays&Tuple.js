"use strict";
//Arrays
let numbers = [];
for (let num = 0; num < 11; num++) {
    numbers.push(num);
}
console.log(numbers);
for (let i = numbers.length - 1; i >= 0; i--) {
    if (i % 2 == 0) {
        numbers.splice(i, 1);
    }
}
console.log(numbers);
//tuples
let order;
order = ["chair", 5];
function printOrder(order) {
    return `Order ${order[1]} x ${order[0]}`;
}
console.log(printOrder(order));
