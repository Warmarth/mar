//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(k) {
    this.k = k.split("\n").map((row) => row.split(" ").map(Number));
  }

  get rows() {
    return this.k
  }

  get columns() {
    return this.k[0].map((_, colIn) => this.k.map((item) => item[colIn]));
  }
}
