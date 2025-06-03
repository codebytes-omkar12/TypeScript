class Car{
   model:string;
   year:number

   constructor(model:string,year:number){
       this.model=model;
       this.year=year;
   }

   getInfo():string{
    return `Model Name:${this.model} Year:${this.year} `
   }

}

const Ford= new Car("mustang",1969);

console.log(Ford.getInfo());
 