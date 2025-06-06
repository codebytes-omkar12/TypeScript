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


//Generics with multiple constriant;

interface hasTitleAndLength{
    title:string,
    length:number
}

const summarizeItem=<T extends hasTitleAndLength>(specimen:T):string =>{

    return `The item ${specimen.title} has a length of ${specimen.length} pages`
}

const literature={
    title:"Robinson Crusoe",
    length:500
}

console.log(summarizeItem(literature));