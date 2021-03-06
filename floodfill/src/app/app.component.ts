import {Component, OnInit} from '@angular/core';
import * as Fixed2DArray from 'fixed-2d-array/lib/fixed-2d-array';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  result = '';
  array;
  private readonly ARRAY_DIMENSION: number = 100;

  constructor() {
  }

  ngOnInit(): void {
    this.handleCreateFixedArray();
  }

  handleClick(): void {
    this.result = 'wow that really worked!';
  }

  handleCreateNewArray(): void {
    this.array = this.getNewRandomArray(this.ARRAY_DIMENSION, this.ARRAY_DIMENSION);
  }

  handleCreateFixedArray(): void {
    this.array = this.getNewFixedArray();
  }

  getRandomNumber(): number {
    return Math.random() < 0.5 ? 0 : 1;
  }

  getGrid() {

  }

  getNewRandomArray(width, height): Fixed2DArray {
    const ret = new Fixed2DArray(width, height, 0);
    const context = this;

    function myFunc(currentValue, index, array) {
      array.set(index.y, index.x, context.getRandomNumber());
    }

    ret.forEach(myFunc);
    return ret;
  }

  getNewFixedArray(): Fixed2DArray {
    // const ret = new Fixed2DArray(10, 10, 0);
    // const context = this;
    //
    // function myFunc(currentValue, index, array) {
    //   array.set(index.y, index.x, 9-Math.abs(index.x - index.y));
    // }
    //
    // ret.forEach(myFunc);
    // return ret;

    const ret = new Fixed2DArray(10, 10, 0);
    ret.set(1, 1, 1);
    ret.set(1, 2, 1);
    ret.set(1, 3, 1);
    ret.set(2, 1, 1);
    ret.set(2, 2, 2);
    ret.set(2, 3, 1);
    ret.set(3, 1, 1);
    ret.set(3, 2, 1);
    ret.set(3, 3, 1);
    return ret;
  }
}
