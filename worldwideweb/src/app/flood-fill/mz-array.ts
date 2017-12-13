export class MzArray {
  public grid;
  private width: number;
  private height: number;

  constructor(width, height, initialValue?) {
    this.width = width;
    this.height = height;
    this.grid = new Array(width);

    for (let i = 0; i < width; i++) {
      this.grid[i] = new Array(height);
    }

    if (MzArray.isPresent(initialValue)) {
      for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
          this.grid[x][y] = initialValue;
        }
      }
    }
  }

  public static isPresent(value: any): boolean {
    return (value !== null && value !== undefined);
  }

  public set(x, y, value): void {
    this.grid[x][y] = value;
  }

  public forEach(fun: Function): void {
    const index = {x: 0, y: 0};
    for (let x = 0; x < this.width; x++) {
      index.x = x;
      for (let y = 0; y < this.height; y++) {
        index.y = y;
        fun.call(this.grid[x][y], index, this.grid);
      }
    }
  }

  /*
    public toString(): string {
      let ret = '';
      for (let x = 0; x < this.width; x++) {
        for (let y = 0; y < this.height; y++) {
          ret += this.grid[x][y] + ',';
        }
        ret += '\n';
      }
      return ret;
    }
    */


}
