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

// me.username="stalin"; erro as usrname is  only read-only.