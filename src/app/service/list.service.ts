import { Injectable } from '@angular/core';
import { Animal } from '../Animal';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  // Banco de dados vindo de outro lugar
  private apiUrl = 'http://localhost:3000/animals'

  constructor(private http: HttpClient ) { }

  // Trabalha em conjunto com o list-render e excluir no back-end
  remove(id: number){
    return this.http.delete<Animal>(`${this.apiUrl}/${id}`)
   }


  //PRIMEIRO METODO SEM "EXCLUIR DE FATO"
  //remove(animals: Animal[], animal: Animal){
    // console.log('ativando service')
    // return animals.filter((a) => animal.name !== a.name)
//}

  getAll(): Observable<Animal[]>{
    return this.http.get<Animal[]>(this.apiUrl)
  }

  getItem(id: number): Observable<Animal>{
    return this.http.get<Animal>(`${this.apiUrl}/${id}`)
  }
}
