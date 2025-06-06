//using typeof

const logValueType=(val:number|string):void=>{
  if(typeof val==="string"){
    console.log(val.toUpperCase());
  }
  else{
    console.log(val);
  }
}

logValueType("hellojello");
logValueType("123567");


//using in

type FullUser={
    name:string;
    email:string;
};

type AdminUser = FullUser & {
    isAdmin:boolean;
}

const describeUser = (user:FullUser| AdminUser):void=>{
    if("isAdmin" in user){
        console.log("Admin Access")
    }
    else{
        console.log("regular user");
    }
}

const ramesh:AdminUser ={
    name:"ramesh",
    email:"ramesh@123.com",
    isAdmin:false
}

const suresh:FullUser ={
    name:"suresh";
    email:"suresh@123.com",
    
}
describeUser(ramesh);
describeUser(suresh);

class Bird{
    fly(){
        console.log("Flying High!");
    }
}

class Fish{
    swim(){
        console.log("Swimming deep!");
    }
}

const moveAnimal =(animal:Bird|Fish):void=>{
   if(animal instanceof Bird){
     animal.fly();
   }
   else{
         animal.swim();
   }
}

const clownFish= new Fish;

moveAnimal(clownFish);

const falcon = new Bird;

moveAnimal(falcon);