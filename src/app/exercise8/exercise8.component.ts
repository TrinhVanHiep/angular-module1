import { Component, OnInit } from '@angular/core';
import { MathService } from './math.service'; // Adjust the path accordingly

@Component({
  selector: 'app-exercise8',
  standalone: true,
  imports: [],
  templateUrl: './exercise8.component.html',
  styleUrl: './exercise8.component.scss'
})
export class Exercise8Component implements OnInit {
  factorialResult: number = 0;
  isPrime: boolean = false;

  constructor(private mathService: MathService) { }

  ngOnInit(): void {
    const numberToCalculateFactorial = 5;
    this.factorialResult = this.mathService.caculateFactorial(numberToCalculateFactorial);

    const numberToCheckPrime = 7;
    this.isPrime = this.mathService.checkPrimeNumbers(numberToCheckPrime);
  }
}
