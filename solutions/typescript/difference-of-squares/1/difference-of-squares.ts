export class Squares {
  count:number
  constructor(count: unknown) {
    if (typeof count !== "number"){
      throw new Error("count must be a number");
    }
    this.count= count;
  }

  get sumOfSquares(): number {
    let sum = 0
    for (let i = 0; i <= this.count;i++){
      sum += i * i
    }
    return sum;
  }

  get squareOfSum(): number {
    let sum = 0
    for (let i = 0; i <= this.count;i++){
     sum += i 
    }
    return sum * sum;
  }

  get difference(): number {
    return this.squareOfSum - this.sumOfSquares;
  }
}
