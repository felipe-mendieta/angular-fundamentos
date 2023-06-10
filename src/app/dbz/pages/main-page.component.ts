import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  // Inyeccion de dependecias
  constructor(private dbzService: DbzService) {}

  personajeDefaultFromMainPageTS: Personaje = {
    nombre: 'defaultHero',
    poder: 3000,
  };

  agregarNuevoPersonaje(parametro1: Personaje): void {
    this.dbzService.personajes.push(parametro1);
    console.log(parametro1);
  }
  deletePersonaje(id: string): void {
    this.dbzService.deleteCharacterById(id);
  }
}
