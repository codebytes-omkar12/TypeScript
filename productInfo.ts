let productName:string = "TV";
let productPrice:number = 10000;
let inStock:boolean = true;


const productInfo = (pName:string,pPrice:number):string=>{
   return `Product name is ${pName} and Product Price is ${pPrice}`;
}

console.log(productInfo("Hair Dryer",5000));