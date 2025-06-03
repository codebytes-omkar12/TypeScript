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
const Jack = {
    name: "Jack",
    rollNumber: 2102070075,
    address: {
        city: "cincinati",
        pinCode: 757002
    }
};
console.log(Jack.address.city);
const directory = {
    mom: 6371234567,
    dad: 9583412345,
    she: 9776512345
};
console.log(directory["dad"]);
const adminUser = {
    name: "Rakesh",
    email: "rakesh@123.com",
    isAdmin: true
};
console.log(adminUser);
