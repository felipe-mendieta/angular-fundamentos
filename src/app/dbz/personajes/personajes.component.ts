import { Component, EventEmitter, Output } from '@angular/core';

import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent {
  @Output() onDeletePersonaje: EventEmitter<string> = new EventEmitter();
  constructor(private dbzService: DbzService) {}
  get arraypersonajes() {
    return this.dbzService.personajes;
  }

  // @Input('arraypersonajes') arraypersonajes:Personaje[]=[];
  deletePersonaje(id?: string) {
    if (!id) return;
    console.log('Emitiendo evento a padre y borrando personaje', id);

    this.onDeletePersonaje.emit(id);
  }
}
