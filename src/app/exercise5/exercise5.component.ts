import { Component } from '@angular/core';

class Rectangle {
  length: number;
  width: number;

  constructor(length: number, width: number) {
    this.length = length;
    this.width = width;
  }

  calculateArea(): number {
    return this.length * this.width;
  }
}
@Component({
  selector: 'app-exercise5',
  standalone: true,
  imports: [],
  templateUrl: './exercise5.component.html',
  styleUrl: './exercise5.component.scss'
})
export class Exercise5Component {
  myRectangle: Rectangle;
  area: number;

  constructor() {
    this.myRectangle = new Rectangle(5, 10);
    this.area = this.myRectangle.calculateArea();
  }
}
