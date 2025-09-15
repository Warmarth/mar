export class Anagram {
  private readonly _word: string;

  constructor(word: string) {
    this._word = word.toLowerCase();
  }

  public matches(...potentials: string[]) {
    return potentials.reduce((acc: string[], current: string) => {
      const isSame = current.toLowerCase() === this._word.toLowerCase();
      const isAnagram = this.sortWord(current) === this.sortWord(this._word);
      if (!isSame && isAnagram) {
        acc.push(current);
      } else {
        return acc;
      }
      return acc;
    }, []);
  }

    sortWord(wordy: string): string {
    return wordy
      .toLowerCase()
      .split("")
      .reverse()
      .sort((a, b) => b.localeCompare(a))
      .join("");
  }
  }
