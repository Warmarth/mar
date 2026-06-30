export class Triangle {
  private sides: number[];
  private a: number | undefined;
  private b: number | undefined;
  private c: number | undefined;

  constructor(...sides: number[]) {
    this.a = sides[0];
    this.b = sides[1];
    this.c = sides[2];
    this.sides = sides;
    // if (sides.every((side) => side <= 0)) {
    //   throw new Error("All sides must be positive");
    // }
  }

  get isEquilateral() {
    if (this.sides.length !== 3) {
      throw new Error("A triangle must have exactly 3 sides");
    }
    if (this.sides.every((side) => side === 0)){
      return false
    }
    return this.sides.every((side) => side === this.sides[0]);
  }

 get isIsosceles() {
  if (
    this.a === undefined ||
    this.b === undefined ||
    this.c === undefined ||
    this.a <= 0 ||
    this.b <= 0 ||
    this.c <= 0
  ) {
    return false;
  }

  // Invalid triangle
  if (
    this.a + this.b < this.c ||
    this.a + this.c < this.b ||
    this.b + this.c < this.a
  ) {
    return false;
  }

  return (
    this.a === this.b ||
    this.b === this.c ||
    this.a === this.c
  );
}

get isScalene() {
  if (
    this.a === undefined ||
    this.b === undefined ||
    this.c === undefined ||
    this.a <= 0 ||
    this.b <= 0 ||
    this.c <= 0
  ) {
    return false;
  }

  if (
    this.a + this.b < this.c ||
    this.a + this.c < this.b ||
    this.b + this.c < this.a
  ) {
    return false;
  }

  return (
    this.a !== this.b &&
    this.b !== this.c &&
    this.a !== this.c
  );
}
}


