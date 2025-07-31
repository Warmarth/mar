
const COLORS = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white",
];
const colorCode = (arg: string): any => {
  return arg === "color" ? COLORS.map((color) => color) : COLORS.indexOf(arg);
};
export const decodedValue = (colors: string[]): any => {
  const value = colors.map((color) => colorCode(color)).join("");
  return value.length > 2 ? parseInt(value.slice(0, 2)) : Number(value);
};