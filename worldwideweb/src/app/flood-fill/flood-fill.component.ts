import {Component, OnInit} from '@angular/core';
// import * as Fixed2DArray from 'fixed-2d-array/lib/fixed-2d-array';
import {MzArray} from './mz-array';

@Component({
  selector: 'app-flood-fill',
  templateUrl: './flood-fill.component.html',
  styleUrls: ['./flood-fill.component.scss']
})
export class FloodFillComponent implements OnInit {

  result = '';
  array: MzArray;
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

  getNewRandomArray(width, height): MzArray {
    const ret = new MzArray(width, height, 0);
    const context = this;

    function myFunc(currentValue, index, array) {
      array.set(index.y, index.x, context.getRandomNumber());
    }

    ret.forEach(myFunc);
    return ret;
  }

  getNewFixedArray(): MzArray {
    const ret = new MzArray(10, 10, 0);
    ret.set(1, 2, 1);
    ret.set(1, 3, 1);
    ret.set(1, 4, 1);
    ret.set(2, 2, 1);
    ret.set(2, 3, 2);
    ret.set(2, 4, 1);
    ret.set(3, 2, 1);
    ret.set(3, 3, 1);
    ret.set(3, 4, 1);
    return ret;
  }

  findPerimeters(): void {

  }

}
