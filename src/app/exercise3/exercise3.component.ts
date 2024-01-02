import { Component } from '@angular/core';

function getFirstElement<T>(array: T[]): T | undefined {
  return array.length > 0 ? array[0] : undefined;
}

const displayValue = (numbers: number[]): number | undefined => {
  const firstElement: number | undefined = getFirstElement(numbers);
  return firstElement;
};

@Component({
  selector: 'app-exercise3',
  standalone: true,
  imports: [],
  templateUrl: './exercise3.component.html',
  styleUrl: './exercise3.component.scss'
})

export class Exercise3Component {
  numbers: number[] = [1, 2, 3, 4, 5];
  displayedValue: number | undefined;

  constructor() {
    this.displayedValue = displayValue(this.numbers);
  }
}
