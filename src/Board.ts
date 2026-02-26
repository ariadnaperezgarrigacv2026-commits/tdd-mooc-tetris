export class Board {
  width;
  height;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  toString(): string {
    let boardString:string = "";
    let row:string = "";
    for (let i:number = 0; i < this.width; i++) {
      row += ".";
    }
    for (let i:number = 0; i < this.height; i++) {
      boardString += row + "\n";
    }
    return boardString;
  }
}
