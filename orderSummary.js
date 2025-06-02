var orderName = "Chairs";
var quantity = 15;
var price = 300;
var orderSummary = function (oName, q, p) {
    return "Ordered ".concat(q, " x ").concat(oName, " \u2014 Total: \u20B9 ").concat(q * p);
};
console.log(orderSummary(orderName, quantity, price));
