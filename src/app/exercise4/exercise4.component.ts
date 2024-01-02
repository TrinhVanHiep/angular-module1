import { Component } from '@angular/core';

enum Color {
  RED = "RED",
  GREEN = "GREEN",
  BLUE = "BLUE",
}

@Component({
  selector: 'app-exercise4',
  standalone: true,
  imports: [],
  templateUrl: './exercise4.component.html',
  styleUrl: './exercise4.component.scss'
})
export class Exercise4Component {
  color: Color = Color.RED;
  displayedColor: string;

  constructor() {
    this.displayedColor = this.getColorName(this.color);
  }

  getColorName(color: Color): string {
    return `Color name: ${color}`;
  }
}
