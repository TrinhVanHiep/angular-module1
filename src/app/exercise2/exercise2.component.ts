import { Component } from '@angular/core';

interface IPerson {
  name: string;
  age: number;
  email: string;
}

const displayInfor = (person: IPerson): IPerson => {
  return person;
};

@Component({
  selector: 'app-exercise2',
  standalone: true,
  imports: [],
  templateUrl: './exercise2.component.html',
  styleUrl: './exercise2.component.scss'
})

export class Exercise2Component {
  person: IPerson = {
    name: 'John Doe',
    age: 30,
    email: 'john@example.com'
  };

  updatedPerson: IPerson;

  constructor() {
    this.updatedPerson = displayInfor(this.person);
  }
}
