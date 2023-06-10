import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: 'heroe.component.html',
})
export class HeroeComponent {
  nombre: string = 'IronMan';
  edad: number = 33;
  obtenerNombre(): string {
    return `${this.nombre} tiene ${this.edad}`;
  }

  get nombreCapitalizado(): string {
    return this.nombre.toUpperCase();
  }

  cambiarNombre(nombre: string): string {
    return (this.nombre = nombre);
  }

  cambiarEdad(edad: string): number {

    return (this.edad = Number(edad));
  }
}
