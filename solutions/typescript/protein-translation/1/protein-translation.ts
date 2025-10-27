const aminoAcid: Record<string, string> = {
  AUG: "Methionine",
  UUU: "Phenylalanine",
  UUC: "Phenylalanine",
  UUA: "Leucine",
  UUG: "Leucine",
  UCU: "Serine",
  UCC: "Serine",
  UCA: "Serine",
  UCG: "Serine",
  UAU: "Tyrosine",
  UAC: "Tyrosine",
  UGU: "Cysteine",
  UGC: "Cysteine",
  UGG: "Tryptophan",
  UAA: "STOP",
  UAG: "STOP",
  UGA: "STOP",
};

const transcribe = (codon: string): string[] => {
  const chunks = codon.match(/.{1,3}/g);
  if (!chunks) return [];
  return chunks.reduce((acc: string[], val) => {
    if (typeof aminoAcid[val] === "undefined") {
      acc.push("Invalid codon");
    } else {
      acc.push(aminoAcid[val]);
    }
    return acc;
  }, []);
};

export function translate(codon: string): string[] | undefined {
  if (codon.length === 0) return [];
  let code: string[] = transcribe(codon);
  if (code.includes("Invalid codon") && code.length <= 2) {
    throw new Error("Invalid codon");
  }
  if (code.includes("Invalid codon") && code.length > 1) {
    code = code.filter((item) => item !== "Invalid codon");
  }
  if (code.includes("STOP")) {
    const index = code.indexOf("STOP");
    return code.slice(0, index);
  }
  return code;
}
