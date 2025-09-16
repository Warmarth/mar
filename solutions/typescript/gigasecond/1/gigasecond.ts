export class Gigasecond {
  _date;

  constructor(date: Date) {
    this._date = date;
  }
  public date() {
  return new Date(this._date.getTime() + 1_000_000_000_000);
  }
}
