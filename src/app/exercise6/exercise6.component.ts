import { Component, OnInit } from '@angular/core';

const runningCheck = () => {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    console.log(`Method ${propertyKey} works!`);
    target[propertyKey + '_status'] = `Method ${propertyKey} works!`;
  };
};

@Component({
  selector: 'app-exercise6',
  templateUrl: './exercise6.component.html',
  styleUrls: ['./exercise6.component.scss']
})
export class Exercise6Component implements OnInit {
  ngOnInit_status: string = '';
  calculateArea_status: string = '';

  constructor() { }

  @runningCheck()
  ngOnInit(): void {
    this.ngOnInit_status = this.ngOnInit_status || 'No status available';
  }

  @runningCheck()
  calculateArea(): void {
    this.calculateArea_status = this.calculateArea_status || 'No status available';
  }
}
