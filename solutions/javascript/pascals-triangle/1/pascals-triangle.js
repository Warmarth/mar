//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rows = (side) => {
  function factorial(params) {
  if (params <= 1) return 1;
  return params * factorial(params - 1);
}
  function factorialCombination(x, y) {
  const xDy = (factorial(x) / (factorial(y) * factorial(x - y)));
  return xDy ;
}
  let accuulator = 0;
  let triangle = [];
  while (accuulator < side) {
    let row = [];
    for (let i = 0; i <= accuulator; i++) {
      row.push(factorialCombination(accuulator, i));
    }
    triangle.push(row);
    accuulator++;
  }
  return triangle;
};
