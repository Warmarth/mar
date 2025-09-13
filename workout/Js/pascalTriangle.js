const pascalTriangle = (numberOfRows) => {
  const triangle = [];
  const collection = [];

  for (let row = 0; row < numberOfRows; row++) {
    const newRow = [];
    newRow[0] = 1;
    newRow[row] = 1;

    for (let col = 1; col < row; col++) {
      newRow[col] = triangle[row - 1][col - 1] + triangle[row - 1][col];
      collection.push(
        `Row ${row}, Col ${col} = ${triangle[row - 1][col - 1]} + ${
          triangle[row - 1][col]
        }`
      );
    }

    triangle.push(newRow);
    collection.push(`Finished row ${row}: [${newRow}]`);
  }

  return { triangle, collection };
};

console.log(pascalTriangle(5));
