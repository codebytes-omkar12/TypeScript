function optionalGreet(name:String, age?:number):string{
   if(age!==undefined){
    return `Hello ${name} Good Morning,you are ${age} young`;
   }
   else{
      return `hi ${name}`;
   }
}

// console.log(optionalGreet("Omkar",21));
console.log(optionalGreet("Pragya"));

// if that paremetr is absent in the function call then it;s type will be undefined.