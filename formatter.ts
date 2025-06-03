type Formatter = (input:string)=>string;

const toUpperCase: Formatter = (text)=> text.toUpperCase();

console.log(toUpperCase("easy pEasy Lemon SquEEzy"));