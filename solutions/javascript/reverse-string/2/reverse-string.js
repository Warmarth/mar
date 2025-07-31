//
// This is only a SKELETON file for the 'Reverse String' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const reverseString = (word) => {
   let reversed = "";
  let i = word.length - 1;
  while (i >= 0) {
  reversed += word[i];
  i--;
  };
  return reversed;
};