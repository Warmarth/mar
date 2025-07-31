//
// This is only a SKELETON file for the 'Raindrops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

function rainDrop(val) {
let result = "";
val % 3 === 0 ? (result += "Pling") : "";
val % 5 === 0 ? (result += "Plang") : "";
val % 7 === 0 ? (result += "Plong") : "";
return result || val.toString();
}
export const convert = (val) => {
  return rainDrop(val)
};
