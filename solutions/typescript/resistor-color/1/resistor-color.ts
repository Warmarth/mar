export const COLORS = [
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
export const colorCode = (arg: string): any => {
  return arg === "color" ? COLORS.map((color) => color) : COLORS.indexOf(arg);
};
