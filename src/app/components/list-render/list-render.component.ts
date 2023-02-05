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

  // Mostra a frase em baixo após apertar o botão
  ageAnimal(animal: Animal): void{
    this.animalDetais = ` ${animal.name} tem ${animal.age} anos`
  }
  
  // botão de excluir um animal da lista
  removeAnimal(animal: Animal){
    //SEGUNDO METODO de exclução no front-ends
    this.animal = this.animal.filter((a) => animal.name !== a.name)
    this.listService.remove(animal.id).subscribe();
    //PRIMEIRO METODO EM CONJUNTO NO 'SERVICE' SEM EXCLUIR DE FATO
    // console.log('removendo animals');
    // this.animal = this.listService.remove(this.animal, animal);
  }


  // pega as informações dos animais pra outra page
  getAnimals(): void {
    this.listService.getAll().subscribe((animals)=>(this.animal=animals))
  }
  

}
