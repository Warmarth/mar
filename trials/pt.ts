export const pascalTriangleGenerator = (numberOfRows: number) => {
  const triangle: number[][] = [];
  const collection: string[] = [];
  for (let row = 0; row < numberOfRows; row++) {
    const newRow = [];
    // const newRow = new Array();
    // const newRow = new Array(row + 1);
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

const rnaMatch = (rna: string): string => {
  switch (rna) {
    case "C":
      return "G";
    case "G":
      return "C";
    case "A":
      return "U";
    case "T":
      return "A";
    default:
      throw new Error("Invalid input DNA.");
  }
};
export const toRna = (code: string) =>
  code
    .split("")
    .map((codon) => rnaMatch(codon))
    .join("");

export function age(planet: unknown, seconds: unknown): unknown {
  interface PlanetChart {
    name: string;
    time: number;
  }

  const table: PlanetChart[] = [
    { name: "Mercury", time: 0.2408467 },
    { name: "Venus", time: 0.61519726 },
    { name: "Earth", time: 1.0 },
    { name: "Mars", time: 1.8808158 },
    { name: "Jupiter", time: 11.862615 },
    { name: "Saturn", time: 29.447498 },
    { name: "Uranus", time: 84.016846 },
    { name: "Neptune", time: 164.79132 },
  ];

  function calculateAge(orbitalPeriod: number, totalSeconds: number): number {
    return totalSeconds / (31557600 * orbitalPeriod);
  }
  if (typeof planet !== "string") return undefined;
  if (typeof seconds !== "number") return undefined;
  const found = table.find(
    (plant) => plant.name.toLowerCase() === planet.toLowerCase()
  );
  if (found && typeof seconds === "number") {
    return Number(calculateAge(found.time, seconds).toFixed(2));
  }
}
