"use strict";
function getFirst(arr) {
    return arr[0];
}
getFirst([1, 2, 3, 4, 5]);
console.log(getFirst(['A', 'b', 'c', 'd']));
const printSafeLength = (item) => {
    console.log(`This is ${item.length} long`);
};
printSafeLength("Hello");
printSafeLength([1, 2, 3, 4]); // Array
printSafeLength({ length: 10, name: "A" }); // Custom object
const summarizeItem = (specimen) => {
    return `The item ${specimen.title} has a length of ${specimen.length} pages`;
};
const literature = {
    title: "Robinson Crusoe",
    length: 500
};
console.log(summarizeItem(literature));
