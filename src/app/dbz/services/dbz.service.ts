import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { v4 as uuid } from 'uuid';
@Injectable({
  providedIn: 'root',
})
export class DbzService {
  public uuid(): string {
    return (Math.random() + 1).toString(36).substring(7);
  }
  private _personajes: Personaje[] = [
    {
      id: uuid(),
      nombre: 'Trunks',
      poder: 1000,
    },
    {
      id: uuid(),
      nombre: 'Goku',
      poder: 2000,
    },
    {
      id: uuid(),
      nombre: 'Vegueta',
      poder: 1500,
    },
  ];
  constructor() {
    console.log('Servicio inicializado.');
  }
  get personajes(): Personaje[] {
    return [...this._personajes];
  }
  agregarPersonaje(personaje: Personaje) {
    const newPersonaje: Personaje = { id: this.uuid(), ...personaje };

    this._personajes.push(newPersonaje);
    console.log(this._personajes);
  }
  // deletePersonaje(index: number) {
  //   this._personajes.splice(index, 1);
  // }
  deleteCharacterById(id: string) {
    this._personajes=this._personajes.filter((personaje) => personaje.id !== id);
    console.log(this._personajes);
  }
}
