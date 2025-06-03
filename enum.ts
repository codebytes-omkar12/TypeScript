enum Colors{
    Red,
    Green,
    Blue
}

let color1:Colors= Colors.Red;
console.log(color1);

let color2:Colors= Colors.Green;
console.log(color2);

let color3:Colors= Colors.Blue;
console.log(color3);

const enumCtrl=(color:Colors:):string=>{
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