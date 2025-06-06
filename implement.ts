interface watch{
    make:string;
    start():void;
}

class Clock implements watch{
   make:string;
   constructor(make:string){
    this.make=make;
   }

   start():void{
    console.log(`this is ${this.make}`)
   }

}

const rolex = new Clock('1969');

rolex.start();