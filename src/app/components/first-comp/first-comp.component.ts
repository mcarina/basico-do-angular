import { Component } from '@angular/core';

@Component({
  selector: 'app-first-comp',
  templateUrl: './first-comp.component.html',
  styleUrls: ['./first-comp.component.css']
})
export class FirstCompComponent {
  name: string = "Márcia Carina";
  age: number = 20;
  job: string = "programador";
  hob = ['estudar', 'cantar', 'programar'];
  car={
    name: "fiat",
    year: 2016
  }

}
