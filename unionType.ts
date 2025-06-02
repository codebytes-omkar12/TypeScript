const unionFunction =(input: string | number):void=>{
    console.log("Your ID is "+ input);
} 

unionFunction("ABc");
unionFunction("123");
unionFunction("ABC123");


//Example of Function Narrowing

function double(x: number | string): number {
  if (typeof x === "number") {
    return x * 2;
  } else {
    return parseInt(x) * 2;
  }
}
