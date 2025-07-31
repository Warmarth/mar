//
// This is only a SKELETON file for the 'Transpose' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
export const transpose = (input) => {
  let matrix = [];

  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {
      let rowLength = 0;
      let element = input[i][j];
      if (matrix[j]) {
        rowLength = matrix[j].length;
      }
      if (i > rowLength) {
        element = element.padStart(i - rowLength + 1, " ");
      }
      matrix[j] ? matrix[j] += element : matrix[j] = element;
    }
  }
  return matrix;
};
