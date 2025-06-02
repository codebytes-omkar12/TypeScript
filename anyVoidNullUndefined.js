"use strict";
let something;
something = "MyName";
console.log(something);
something = 12345;
console.log(something);
//void : usually used as return type returns nothing
function logMessage(message) {
    console.log(message);
}
logMessage("letter");
//null: intentionall the variable have no value;
let emptyValue = null;
//undefined: variable have not been assigned a type yet;
let notAssigned = undefined;
let maybeNumber;
maybeNumber = null;
console.log(maybeNumber);
maybeNumber = 2102070075;
console.log(maybeNumber);
//Type Infernces: TS smartly guesses the type of the variable based on input value;
