//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const COLORS = [
    "black",
    "brown",
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "violet",
    "grey",
    "white",
  ];
const colorCode = (arg) => {
  return COLORS.indexOf(arg);
};
export const decodedValue = (arg) => {
  const [f, s] = arg;
  let value = "";
  [f, s].map(element => value += colorCode(element))
  return Number(value);
};
