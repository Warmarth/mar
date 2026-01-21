export class Matrix {
  private _rows: number[][];
  private _columns: number[][];

  constructor(matrix: string) {
    this._rows = matrix
      .split("\n")
      .map(row => row.split(" ").map(Number));

    this._columns = this._rows[0].map((_, colIndex) =>
      this._rows.map(row => row[colIndex])
    );
  }

  get rows(): number[][] {
    return this._rows;
  }

  get columns(): number[][] {
    return this._columns;
  }
}
