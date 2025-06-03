class Device{
   protected brand:string;

   constructor(brand:string){
    this.brand=brand;
   }


}

class Laptop extends Device{

    getDetails():string{
        return `Laptop brand is: ${this.brand}`
    }
}

const Acer = new Laptop("Acer");

console.log(Acer.getDetails());
