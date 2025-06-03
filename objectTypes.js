"use strict";
const myBook = {
    title: "Monte Cristo",
    author: "A.Dumas",
    price: 5.66,
    inStock: true
};
const thisBookInfo = (myBook) => {
    return `This book is ${myBook.title},It is written by ${myBook.author},It Costs ${myBook.price}, ${myBook.inStock ? "Available" : "Not Avialbale"}`;
};
console.log(thisBookInfo(myBook));
let me = {
    username: "omkar"
};
me.email = "omkar@123.com";
console.log(me);
// me.username="stalin"; erro as usrname is  only read-only.
