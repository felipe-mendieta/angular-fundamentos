import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';

import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {
  constructor(private dbzService: DbzService) {}
  // Recibimos dato con @input
  @Input('personajePorDefecto')
  personaje1: Personaje = {
    nombre: '',
    poder: 0,
  };
  // @Output() onNuevoPersonaje:EventEmitter<Personaje> = new EventEmitter();

  agregar(): void {
    console.log('agregando emisión de personaje');
    // this.onNuevoPersonaje.emit(this.personaje1);
    this.dbzService.agregarPersonaje(this.personaje1);
    // debugger;
    //limpiamos la variable ya que esta enlazada mediante el 2 way data binding
    this.personaje1 = {
      nombre: '',
      poder: 0,
    };
  }
}
