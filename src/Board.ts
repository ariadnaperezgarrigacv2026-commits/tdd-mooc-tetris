export class Board {
  width: number;
  height: number;
  tiles: string[][];

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
    this.tiles = [];

    for (let y = 0; y < height; y++) {
      this.tiles[y] = [];
      for (let x = 0; x < width; x++) {
        this.tiles[y][x] = ".";
      }
    }
  }

  toString(): string {
    let boardString: string = "";
    for (let i: number = 0; i < this.height; i++) {
      boardString += this.tiles[i].join("") + "\n";
    }
    return boardString;
  }

  drop(block: string): void {
    this.tiles[0][Math.floor(this.width / 2)] = block;
  }
  tick(): void {
    let row: number = 0;
    let col: number = 0;
    let block: string = "";
    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        if (this.tiles[y][x] !== ".") {
          row = y;
          col = x;
          block = this.tiles[y][x];
          console.log(block);
          this.tiles[y][x] = ".";
        }
      }
    }
    this.tiles[row + 1][col] = block;
  }
}
