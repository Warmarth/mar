export const pascalTriangleGenerator = (numberOfRows: number) => {
  const triangle: number[][] = [];
  const collection: string[] = [];
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
    collection.push(`this is for row ${row}`);
  }
  return { triangle, collection };
};
