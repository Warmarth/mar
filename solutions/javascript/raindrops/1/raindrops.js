//
// This is only a SKELETON file for the 'Raindrops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

function rainDrop(val) {
   if (val % 7 === 0 && val % 5 === 0 && val % 3 === 0) {
    return "PlingPlangPlong";
  } else if (val % 7 === 0 && val % 3 === 0) {
    return "PlingPlong";
  } else if (val % 5 === 0 && val % 3 === 0) {
    return "PlingPlang";
  } else if (val % 7 === 0 && val % 5 === 0) {
    return "PlangPlong";
  } else if (val % 7 === 0) {
    return "Plong";
  } else if (val % 5 === 0) {
    return "Plang";
  } else if (val % 3 === 0) {
    return "Pling";
  } else {
    return String(val);
  }
}
export const convert = (val) => {
  return rainDrop(val)
};
