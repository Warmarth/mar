export function isIsogram(word: string): boolean {
  const store: string[] = [];
  const cleaned = word.trim().toLowerCase().replace(/[\s-]/g, "");
  for (let index = 0; index < cleaned.length; index++) {
    const char = cleaned[index];
    if (store.includes(char)) {
      return false;
    }
    store.push(char);
  }
  return true;
}

