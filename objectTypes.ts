type Book ={
    title:string;
    author:string;
    price:number;
    inStock:boolean;
}

const myBook:Book={
    title:"Monte Cristo",
    author:"A.Dumas",
    price:5.66,
    inStock:true

}

//Using a function usung typeAlias

type FuncInfo = (book:Book)=>string;

const thisBookInfo:FuncInfo =(myBook)=>{
    return `This book is ${myBook.title},It is written by ${myBook.author},It Costs ${myBook.price}, ${myBook.inStock?"Available":"Not Avialbale"}`;
}

console.log(thisBookInfo(myBook));

type Profile = {
  readonly username: string;
  email?: string;
}

let me:Profile={
    username:"omkar"
}

me.email="omkar@123.com";

console.log(me);

// me.username="stalin"; error as usrname is  only read-only.

//Nested Object
 type Address={
    city:string;
    pinCode:number;
 }

 type Student={
    name:string;
    rollNumber:number;
    address:Address;
 }

 const Jack : Student ={
    name:"Jack",
    rollNumber:2102070075,
    address:{
        city:"cincinati",
        pinCode:757002
    }
 }

 console.log(Jack.address.city);

 //Index Signatures lets you define types for properties with unknown or dynamic keys.



 type PhoneBook={
    [key:string]:number;
 }

 const directory:PhoneBook={
    mom:6371234567,
    dad:9583412345,
    she:9776512345
 }

 console.log(directory["dad"]);

 //Type Extension : Inheritance principle in OOPS.
    
   type AdUser={
    name:string;
    email:string;
   }

   type Admin= AdUser&{
    isAdmin:boolean;
   }

   const adminUser:Admin={
    name:"Rakesh",
    email:"rakesh@123.com",
    isAdmin:true
   }

   console.log(adminUser);