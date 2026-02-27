export class RotatingShape {
  private readonly shape: readonly (readonly string[])[];

  private constructor(shape: string[][]) {
    // Deep copy 2D array
    this.shape = shape.map((row: string[]): string[] => [...row]);
  }

  static fromString(stringShape: string) {
    const rows = stringShape
      .trim()
      .split("\n")
      .map((r:string):string[] => r.trim().split(""));
    return new RotatingShape(rows);
  }

  toString(): string {
    return this.shape.map((row: readonly string[]): string => row.join("")).join("\n") + "\n";
  }
}
