export class RotatingShape {
  private readonly shape: readonly (readonly string[])[];

  private constructor(shape: string[][]) {
    // Deep copy 2D array
    this.shape = shape.map((row: string[]): string[] => [...row]);
  }

  static fromString(stringShape: string): RotatingShape {
    const rows = stringShape
      .trim()
      .split("\n")
      .map((r: string): string[] => r.trim().split(""));
    return new RotatingShape(rows);
  }

  toString(): string {
    return this.shape.map((row: readonly string[]): string => row.join("")).join("\n") + "\n";
  }

  rotateRight(): RotatingShape {
    const n: number = this.shape.length;
    const rotated: string[][] = Array.from({ length: n }, (_: string, i: number): string[] =>
      Array.from({ length: n }, (_: string, j: number) => this.shape[n - j - 1][i])
    );
    return new RotatingShape(rotated);
  }
}
