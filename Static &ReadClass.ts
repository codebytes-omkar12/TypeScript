class Circle{
    readonly radius:number;
    static PI:number=3.14;

    constructor(radius:number){
        this.radius=radius;
    }
    
    getArea():number{
        return Circle.PI*(this.radius)*(this.radius);
    }
}

const gol=new Circle(5);

console.log(gol.getArea());

//Class Inheritance 

class veichle{
    brand:string;
    year:number;

    constructor (brand:string,year:number){
        this.brand=brand;
        this.year=year;
    }

    start():string{
        return `Veichle Started`
    }
}


    class car extends veichle {
    drive():string{
        return `Car is Driving`
    }
}


const ford= new car("ford",1971);

console.log(ford.start());
console.log(ford.drive());

