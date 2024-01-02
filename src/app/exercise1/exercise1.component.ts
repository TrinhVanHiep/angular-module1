import { Component } from '@angular/core';

@Component({
  selector: 'app-my-new-component',
  templateUrl: './exercise1.html',
  styleUrls: ['./exercise1.scss']
})
export class Exercise {
  numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  sum: number = 0;

  constructor() {
    this.sum = this.calculateSum(this.numbers);
  }

  private calculateSum(arr: number[]): number {
    return arr.reduce((acc: number, curr: number) => acc + curr, 0);
  }
}
