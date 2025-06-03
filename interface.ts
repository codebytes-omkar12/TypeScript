interface pUser {
   name:string;
   email:string;
}

interface adminUser extends pUser {
    isAdmin:boolean
}

const Rakesh:adminUser={
name:"rakesh",
email:"rakesh@34.com",
isAdmin:false
}

console.log(Rakesh);

//extending multiple Interface.

interface A { a: string; }
interface B { b: number; }

interface C extends A, B {
  c: boolean;
}

const D:C={
    c:true,
    a:"hello",
    b:7
}
console.log(D);

//function using interface

interface okFormatter {
  (input: string): string;
}

const toLower: okFormatter = (text) => text.toLowerCase();

console.log(toLower("ADASIUHDIDIFJFFJAIFJ"));
