export class Robot {
  private static usedNames = new Set<string>();
  private _name: string;

  private getRandomLetter(): string {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return letters[Math.floor(Math.random() * letters.length)];
  }

  private getRandomNumber(): string {
    return Math.floor(Math.random() * 10).toString();
  }

  private getRandomName(): string {
    const letters = Array.from({ length: 2 }, () => this.getRandomLetter());
    const numbers = Array.from({ length: 3 }, () => this.getRandomNumber());
    return [...letters, ...numbers].join("");
  }

  private generateUniqueName(): string {
    let name: string;
    do {
      name = this.getRandomName();
    } while (Robot.usedNames.has(name));
    Robot.usedNames.add(name);
    return name;
  }

  constructor() {
    this._name = this.generateUniqueName();
  }

  public get name(): string {
    return this._name;
  }

  public resetName(): void {
    this._name = this.generateUniqueName();
  }

  public static releaseNames(): void {
    Robot.usedNames.clear();
  }
}
