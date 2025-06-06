interface Train {
  type: "train"; // Discriminator
  doors: number;
  model: string;
}

interface Truck {
  type: "truck";
  capacity: number;
  wheels: number;
}

interface Bike {
  type: "bike";
  hasCarrier: boolean;
  gearCount: number;
}

// interface Plane {
//     type:"plane",
//     engine:number
// }

type Vehicle = Train | Truck | Bike ;

// type Vehicle = Train | Truck | Bike | Plane;

function startVehicle(vehicle: Vehicle): void {
  switch (vehicle.type) {
    case "train":
      console.log(`Train with ${vehicle.doors} doors, model ${vehicle.model}`);
      break;
    case "truck":
      console.log(`Truck with capacity ${vehicle.capacity} tons`);
      break;
    case "bike":
      console.log(`Bike with ${vehicle.gearCount} gears`);
      break;
    default:
      const _exhaustiveCheck: never = vehicle;
      console.log(_exhaustiveCheck); // Enforces exhaustiveness
  }
}


const myBike: Bike = {
  type: "bike",
  hasCarrier: true,
  gearCount: 6
};

startVehicle(myBike);

// const _exhaustiveCheck: never = vehicle;
// …means:

// If all known types are handled above, this line should be unreachable.
// If it's reachable, then something is missing from your switch — and TypeScript throws an error!
