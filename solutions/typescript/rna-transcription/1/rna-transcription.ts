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
export function toRna(code: string) {
  return code
    .split("")
    .map(codon => rnaMatch(codon))
    .join("");
}