"use strict";
let orderName = "Chairs";
let quantity = 15;
let price = 300;
const orderSummary = (oName, q, p) => {
    return `Ordered ${q} x ${oName} — Total: ₹ ${q * p}`;
};
console.log(orderSummary(orderName, quantity, price));
