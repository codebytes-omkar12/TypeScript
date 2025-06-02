"use strict";
let productName = "TV";
let productPrice = 10000;
let inStock = true;
const productInfo = (pName, pPrice) => {
    return `Product name is ${pName} and Product Price is ${pPrice}`;
};
console.log(productInfo("Hair Dryer", 5000));
