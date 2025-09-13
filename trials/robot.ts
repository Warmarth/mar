class Robot {
  private static usedName = new Set<string>();

  private _name: string;
  private getRandomletter() {
    const letters = "abcdefghijklmnopqrstuvwxyz".toUpperCase();
    return letters[Math.floor(Math.random() * letters.length)];
  }
  private getRandomNumber() {
    return Math.floor(Math.random() * 10);
  }
  private getRandomName() {
    const letters = Array.from({ length: 2 }, this.getRandomletter);
    const numbers = Array.from({ length: 3 }, this.getRandomNumber);
    return [...letters, ...numbers].join("").toString();
  }
  private uniqueName() {
    let name: string;
    do {
      name = this.uniqueName();
    } while (Robot.usedName.has(name));
    {
      Robot.usedName.add(name);
      return name;
    }
  }
  constructor() {
    this._name = this.getRandomName();
  }
  public get name(): string {
    return this._name;
  }
  public resetName(): void {
    Robot.usedName.delete(this.name);
    this._name = this.getRandomName();
  }
  public releaseName(): void {
    Robot.usedName.delete(this.name);
    this._name = "";
  }
}

const robot = new Robot();
const robot1 = robot;
const robot2 = new Robot();
const robot3 = new Robot();

console.log(robot === robot1);
console.log(robot1 === robot2);
console.log(robot2 === robot3);
