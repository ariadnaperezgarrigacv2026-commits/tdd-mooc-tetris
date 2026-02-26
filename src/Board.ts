export class Board {
  width: number;
  height: number;
  tiles: string[][];
  fallingBlock: string = "";
  isFalling: boolean = true;

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
    if (this.fallingBlock == "") {
      this.fallingBlock = block;
      this.isFalling = true;
      this.tiles[0][Math.floor(this.width / 2)] = block;
    } else {
      throw "already falling";
    }
  }
  tick(): void {
    let row: number = 0;
    let col: number = 0;
    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        if (this.tiles[y][x] == this.fallingBlock) {
          row = y;
          col = x;
          if (row != this.height - 1) {            if (this.tiles[row + 1][col] == ".") this.tiles[y][x] = ".";
          } else {            this.isFalling = false;            this.fallingBlock = "";
          }
        }
      }
    }
    if (row != this.height - 1) {      if (this.tiles[row + 1][col] == ".") {        this.tiles[row + 1][col] = this.fallingBlock;
      } else {
        this.isFalling = false;
        this.fallingBlock = "";
      }
    }
  }

  hasFalling(): boolean {
    return this.isFalling;
  }
}
