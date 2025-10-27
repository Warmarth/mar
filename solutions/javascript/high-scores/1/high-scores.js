//
// This is only a SKELETON file for the 'High Scores' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class HighScores {
    constructor(score) {
    this._score = score;
  }

  get scores() {
     return [...this._score];
  }

  get latest() {
      return this._score[this._score.length - 1];
  }

  get personalBest() {
    return Math.max(...this._score);
  }

  get personalTopThree() {
     return [...this._score].sort((a, b) => b - a).slice(0, 3);
  }
}
