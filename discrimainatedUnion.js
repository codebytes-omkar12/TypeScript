"use strict";
// type Vehicle = Train | Truck | Bike | Plane;
function startVehicle(vehicle) {
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
            const _exhaustiveCheck = vehicle;
            console.log(_exhaustiveCheck); // Enforces exhaustiveness
    }
}
const myBike = {
    type: "bike",
    hasCarrier: true,
    gearCount: 6
};
startVehicle(myBike);
// const _exhaustiveCheck: never = vehicle;
// …means:
// If all known types are handled above, this line should be unreachable.
// If it's reachable, then something is missing from your switch — and TypeScript throws an error!
