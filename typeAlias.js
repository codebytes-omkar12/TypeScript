"use strict";
let orderList2;
orderList = ["TV", 10];
function printOrderListfunc(order1) {
    return `Order${order1[0]} x ${order1[1]}`;
}
console.log(printOrderList(orderList));
function userInfo(user1) {
    return `Name:${user1.name} Age:${user1.age} Admin(t/f):${user1.isAdmin}`;
}
let omkar = {
    name: "Omkar",
    age: 22,
    isAdmin: true
};
console.log(userInfo(omkar));
