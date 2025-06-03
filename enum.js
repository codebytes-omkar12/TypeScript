"use strict";
var Colors;
(function (Colors) {
    Colors[Colors["Red"] = 0] = "Red";
    Colors[Colors["Green"] = 1] = "Green";
    Colors[Colors["Blue"] = 2] = "Blue";
})(Colors || (Colors = {}));
let color1 = Colors.Red;
console.log(color1);
let color2 = Colors.Green;
console.log(color2);
let color3 = Colors.Blue;
console.log(color3);
const enumCtrl = (color) => {
    switch (color) {
        case Colors.Red:
            return "Selected color is Red";
        case Colors.Green:
            return "Selected color is Green";
        case Colors.Blue:
            return "Selected color is Blue";
        default:
            return "Unknown color";
    }
};
console.log(enumCtrl(color3));
