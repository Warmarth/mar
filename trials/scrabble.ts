const letters: { [key: string]: number } = {
  Q: 10,
  Z: 10,
  J: 8,
  X: 8,
  K: 5,
  F: 4,
  H: 4,
  V: 4,
  W: 4,
  Y: 4,
  B: 3,
  C: 3,
  M: 3,
  P: 3,
  D: 2,
  G: 2,
  A: 1,
  E: 1,
  I: 1,
  O: 1,
  U: 1,
  L: 1,
  N: 1,
  R: 1,
  S: 1,
  T: 1,
};
// function changeLettersToScore(letter: string): number {
//   switch (letter) {
//     case "Q":
//     case "Z":
//       return 10;
//     case "J":
//     case "X":
//       return 8;
//     case "K":
//       return 5;
//     case "F":
//     case "H":
//     case "V":
//     case "W":
//     case "Y":
//       return 4;
//     case "B":
//     case "C":
//     case "M":
//     case "P":
//       return 3;
//     case "D":
//     case "G":
//       return 2;
//     case "A":
//     case "E":
//     case "I":
//     case "O":
//     case "U":
//     case "L":
//     case "N":
//     case "R":
//     case "S":
//     case "T":
//       return 1;
//     default:
//       return 0;
//   }
// }
function score(word: string): number {
  return word
    .toUpperCase()
    .trim()
    .split("")
    .reduce((acc, letter) => acc + (letters[letter] || 0), 0);
}

