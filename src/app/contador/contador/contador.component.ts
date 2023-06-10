import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-contador',
    //template: '<span>Felipe</span>'
  templateUrl:'contador.component.html',

})
export class ContadorComponent {
    public titulo:string = 'Contador App';

    numero:number = 10;
    numero2:number =100;
    aumentar(numero:number){
      this.numero2+=2;
    }
    disminuir(numero:number){
      this.numero2-=2;
    }
   
    
}
