//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (rna) => {
  let rnaString = "";
  for (let i = 0; i < rna.length; i++) {
    if (rna[i] === "A") {
      rnaString += "U";
    } else if (rna[i] === "C") {
      rnaString += "G";
    } else if (rna[i] === "G") {
      rnaString += "C";
    } else if (rna[i] === "T") {
      rnaString += "A";
    }
  }
  return rnaString;
};
