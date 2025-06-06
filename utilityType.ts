type Product={
  id: number;
  name: string;
  price: number;
  description: string;
}

//creates a type only using name and price field
const product1:Pick<Product,"name"|"price">={
  name:"symphony",
  price:4000
}

//all properties becomes optional
const product2:Partial<Product>={

}

const product3:Omit<Product,"id"|"description">={
  name:"voltas",
  price:6000
}

const product4:Required<Product>={
  name:"voltas",
  price:6000,
  id:12,
  description:"Good Cooler"
}

const Product5:Readonly<Product>={
  name:"hras",
  price:8000,
  id:14,
  description:"Good Cooler"

}

//record utility type

type CatName = "miffy" | "boris" | "mordred";

interface CatInfo {
  age: number;
  breed: string;
}

const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: "Persian" },
  boris: { age: 5, breed: "Maine Coon" },
  mordred: { age: 16, breed: "British Shorthair" },
};
