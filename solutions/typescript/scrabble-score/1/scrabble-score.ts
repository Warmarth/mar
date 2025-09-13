function changeLettersToScore(letter: string): number {
  switch (letter) {
    case "Q":
    case "Z":
      return 10;
    case "J":
    case "X":
      return 8;
    case "K":
      return 5;
    case "F":
    case "H":
    case "V":
    case "W":
    case "Y":
      return 4;
    case "B":
    case "C":
    case "M":
    case "P":
      return 3;
    case "D":
    case "G":
      return 2;
    case "A":
    case "E":
    case "I":
    case "O":
    case "U":
    case "L":
    case "N":
    case "R":
    case "S":
    case "T":
      return 1;
    default:
      return 0;
  }
}
export function score(word: string):number {
  if(!word) return 0
  return word
    .toUpperCase()
    .trim()
    .split("")
    .map((letter) => changeLettersToScore(letter))
    .reduce((value, accumulator) => accumulator + value, 0);
}
