"use strict";
//using typeof
const logValueType = (val) => {
    if (typeof val === "string") {
        console.log(val.toUpperCase());
    }
    else {
        console.log(val);
    }
};
logValueType("hellojello");
logValueType("123567");
const describeUser = (user) => {
    if ("isAdmin" in user) {
        console.log("Admin Access");
    }
    else {
        console.log("regular user");
    }
};
const ramesh = {
    name: "ramesh",
    email: "ramesh@123.com",
    isAdmin: false
};
const suresh = {
    name: "suresh",
    email: "suresh@123.com",
};
describeUser(ramesh);
describeUser(suresh);
class Bird {
    fly() {
        console.log("Flying High!");
    }
}
class Fish {
    swim() {
        console.log("Swimming deep!");
    }
}
const moveAnimal = (animal) => {
    if (animal instanceof Bird) {
        animal.fly();
    }
    else {
        animal.swim();
    }
};
const clownFish = new Fish;
moveAnimal(clownFish);
const falcon = new Bird;
moveAnimal(falcon);
