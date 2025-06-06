function getFirst<T>(arr:T[]):T{
    return arr[0];
}

getFirst([1,2,3,4,5]);
console.log(getFirst(['A','b','c','d']));


const printSafeLength = <T extends {length:number}> (item:T): void=>{
    console.log(`This is ${item.length} long`);
}

printSafeLength("Hello");
printSafeLength([1, 2, 3, 4]);              // Array
printSafeLength({ length: 10, name: "A" }); // Custom object
// printSafeLength(123);   will not work