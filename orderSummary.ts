let orderName:string = "Chairs";
let quantity:number = 15;
let price:number =300;

const orderSummary=(oName:string,q:number,p:number):string=>{
    return `Ordered ${q} x ${oName} — Total: ₹ ${q*p}`;
}

console.log(orderSummary(orderName,quantity,price));