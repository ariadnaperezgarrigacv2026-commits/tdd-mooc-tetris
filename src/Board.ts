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
}
