function allCapital (value:unknown):string{

    if(typeof value==="string"){  //extra layer of safety
        return ( value as string ).toUpperCase();
    }
    return "not a string";
    
}

console.log(allCapital("melloBello"));
console.log(allCapital(1234));