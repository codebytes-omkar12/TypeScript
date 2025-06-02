// used when there are an indefinite number of parameters 
//always mentioned at last in parameters in the function;
//those params are presented to the function in form of array.

const sumAll=(...num:number[]):number=>{
    return num.reduce((total,num)=>total+num,0);
}

const allSum:(...num:number[])=>number=(...num)=>{
    return num.reduce((total,num)=>total+num,0);
}

// This is basically 

//assigning : 

// let allSum:(...num:number[])=>number;

//definig:

//allSum= (...num)=>{}

console.log(sumAll(1,2,3,4,5));
console.log(sumAll(5,4,6,7,8,9));
console.log(sumAll());
console.log(sumAll(1,2,3,4,5,6,7,8,9,10));
console.log(sumAll(10,20,30,40));
console.log(allSum(1,2,3,4,5,6,7,8,9,10));