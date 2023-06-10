import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
})
export class ListadoComponent {
  heroes = ['spiderman', 'thor', 'batman', 'catwoman'];
  public heroeBorrado: string = '';
  borrarHeroe(): void {
    this.heroeBorrado = this.heroes.pop() || '';
  }
}
