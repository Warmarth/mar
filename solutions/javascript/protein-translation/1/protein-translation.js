//
// This is only a SKELETON file for the 'Protein Translation' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

function transcribe(codon = []) {
  const code = codon.match(/.{1,3}/g);
  return code.reduce((acc, curr) => {
    switch (curr) {
      case "AUG":
        acc.push("Methionine");
        break;
      case "UUU":
      case "UUC":
        acc.push("Phenylalanine");
        break;
      case "UUA":
      case "UUG":
        acc.push("Leucine");
        break;
      case "UCU":
      case "UCC":
      case "UCA":
      case "UCG":
        acc.push("Serine");
        break;
      case "UAU":
      case "UAC":
        acc.push("Tyrosine");
        break;
      case "UGU":
      case "UGC":
        acc.push("Cysteine");
        break;
      case "UGG":
        acc.push("Tryptophan");
        break;
      case "UAA":
      case "UAG":
      case "UGA":
        acc.push("STOP");
        break;
      default:
       acc.push("Invalid codon");
        break;
    }
    return acc;
  }, []);
}
export function translate(codon = []) {
  if (codon.length === 0) return codon;
  const code = transcribe(codon);
  if (code.includes("Invalid codon") && code.length > 1) {
     code.filter((item) => item !== "Invalid codon") ;
  }
  if (code.includes("Invalid codon") && code.length  <= 2) {
    throw new Error("Invalid codon")
  }
  if (code.includes("STOP")) {
    const index = code.indexOf("STOP");
    return code.slice(0, index);
  }
  return code;
}