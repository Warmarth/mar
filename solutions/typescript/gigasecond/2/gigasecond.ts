export class Gigasecond {
  constructor(readonly this_date: Date) {}
  public date() {
    return new Date(this.this_date.getTime() + 1_000_000_000_000);
  }
}