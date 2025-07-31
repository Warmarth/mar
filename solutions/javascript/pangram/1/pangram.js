//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (n) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const pan = [];
   const v = n.toLowerCase();
  for (let index = 0; index < v.length; index++) {
    if (alphabet.includes(v[index]) && !pan.includes(v[index]))
      pan.push(v[index]);
  }
  pan.sort();

  return pan.length === 26;
};

