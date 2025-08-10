//
// This is only a SKELETON file for the 'Luhn' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const valid = (pin) => {
  const i = pin.replace(/\s+/g, "");
  if (i.length <= 1) return false;
  const number = i
    .split("")
    .map((num) => Number(num))
    .reverse();
  const result = number.reduce((acc, num, index) => {
    if (index % 2 !== 0) {
      const double = num * 2;
      return acc + (double > 9 ? double - 9 : double);
    }
    return acc + num;
  }, 0);
  return result % 10 === 0;
};
