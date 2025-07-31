//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(side1,side2,side3) {
    this.sides = [side1,side2,side3] ;
  }
  get isValid() {
    const [a, b, c] = this.sides;
    return a + b > c && a + c > b && b + c > a;
  }
  get isEquilateral() {
    if (this.sides.every((side) => side === 0)) {
      return false;
    }
    return this.sides.every((side) => side === this.sides[0]);
  }
  set isEquilateral(value) {
    this.isEquilateral = value;
  }
  get isIsosceles() {
    if (!this.isValid) {
      return false
    }
    return (
      this.sides[0] == this.sides[1] ||
      this.sides[1] == this.sides[2] ||
      this.sides[2] == this.sides[0]
    );
  }
  set isIsosceles(value) {
    this.isIsosceles = value;
  }
  
  get isScalene() {
    if (!this.isValid) return false;
    return (
      this.sides[0] !== this.sides[1] &&
      this.sides[1] !== this.sides[2] &&
      this.sides[2] !== this.sides[0]
    );
  }
  set isScalene(value) {
    this.isScelene = value;
  }
}
