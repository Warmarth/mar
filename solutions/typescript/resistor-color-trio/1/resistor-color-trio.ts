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

 const decodedValue = (colors: string[]): any => {
  const value = colors.map((color) => colorCode(color)).join("");
  return value.length > 2 ? parseInt(value.slice(0, 2)) : Number(value);
};

export function decodedResistorValue(arg: string[]): any {
  let value = arg[2];
  const resistorValue = decodedValue(arg);
  switch (value) {
    case "black":
      return resistorValue + " ohms";
    case ("brown"):
      return resistorValue * 10 + " ohms";
    case "red":
      return resistorValue * .1  + " kiloohms";
    case "orange":
      return resistorValue + " kiloohms";
    case "yellow":
      return resistorValue * 10 + " kiloohms";
    case "green":
      return resistorValue + " megaohms";
    case "blue":
      return resistorValue + " megaohms";
    case "violet":
      return resistorValue * 10 + " megaohms";
    case "grey":
      return resistorValue + " gigaohms";
    case "white":
      return resistorValue + " gigaohms";
  }
  return resistorValue + " ohms";
}