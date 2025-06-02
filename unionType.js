"use strict";
const unionFunction = (input) => {
    console.log("Your ID is " + input);
};
unionFunction("ABc");
unionFunction("123");
unionFunction("ABC123");
//Example of Function Narrowing
function double(x) {
    if (typeof x === "number") {
        return x * 2;
    }
    else {
        return parseInt(x) * 2;
    }
}
