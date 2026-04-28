export class Clock {
  private _hour: number;
  private _minute: number;

  constructor(hour: number, minute: number = 0) {
    const total = this.normalize(hour * 60 + minute);
    this._hour = Math.floor(total / 60);
    this._minute = total % 60;
  }

  private normalize(minutes: number): number {
    return ((minutes % 1440) + 1440) % 1440;
  }

  public toString(): string {
    return `${this._hour.toString().padStart(2, "0")}:${this._minute
      .toString()
      .padStart(2, "0")}`;
  }

  public plus(minutes: number): Clock {
    return new Clock(this._hour, this._minute + minutes);
  }

  public minus(minutes: number): Clock {
    return new Clock(this._hour, this._minute - minutes);
  }

  public equals(other: Clock): boolean {
    return this.toString() === other.toString();
  }
}
