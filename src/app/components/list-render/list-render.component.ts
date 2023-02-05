import { Component } from '@angular/core';

import { Animal } from 'src/app/Animal';

import { ListService } from 'src/app/service/list.service';
@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']


})
export class ListRenderComponent {
  animal: Animal[] = []

  animalDetais = ''

  constructor(private listService : ListService){
    this.getAnimals()
  }

  ageAnimal(animal: Animal): void{
    this.animalDetais = ` ${animal.name} tem ${animal.age} anos`
  }

  removeAnimal(animal: Animal){
    console.log('removendo animals');
    this.animal = this.listService.remove(this.animal, animal);
  }

  getAnimals(): void {
    this.listService.getAll().subscribe((animals)=>(this.animal=animals))
  }
  

}
