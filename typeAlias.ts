type chair= string;
type Order=[string,number];


let orderList2:Order;
orderList=["TV",10];

function printOrderListfunc(order1:Order):string{
    return`Order${order1[0]} x ${order1[1]}`
}

console.log(printOrderList(orderList));

//
type User ={
     name: string; 
     age: number; 
     isAdmin: boolean 
}

function userInfo(user1:User):string{
    return `Name:${user1.name} Age:${user1.age} Admin(t/f):${user1.isAdmin}`
}

let omkar:User={
    name:"Omkar",
    age:22,
    isAdmin:true
}

console.log(userInfo(omkar));