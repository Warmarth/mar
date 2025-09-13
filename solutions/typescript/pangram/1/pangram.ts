
export function isPangram(word: string) {
  const alphabets = `abcdefghijklmnopqrstuvwxyz`;
  return [...alphabets]
    .map((letter) => word.toLowerCase().includes(letter))
    .every((value) => value);
}