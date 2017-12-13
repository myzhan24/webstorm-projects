export class MzArray {
  public grid;
  private width: number;
  private height: number;

  constructor(width, height, initialValue?) {
    this.width = width;
    this.height = height;

    // Create height number of rows
    this.grid = new Array(height);

    // Create width number of columns
    for (let y = 0; y < height; y++) {
      this.grid[y] = new Array(width);
    }

    if (MzArray.isPresent(initialValue)) {
      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          this.grid[y][x] = initialValue;
        }
      }
    }
  }

  public static isPresent(value: any): boolean {
    return (value !== null && value !== undefined);
  }

  public set(x, y, value): void {
    this.grid[y][x] = value;
  }

  public forEach(fun: Function): void {
    const self = this;
    const index = {x: 0, y: 0};
    for (let y = 0; y < this.height; y++) {
      index.y = y;
      for (let x = 0; x < this.width; x++) {
        index.x = x;
        fun.call(self, self.grid[y][x], index, self);
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
