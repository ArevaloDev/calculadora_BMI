import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

  public edad:number = 18;
  public peso:number = 130;
  public altura:number = 140;



  actualizarEdad = (option:string):void => {
    if((option === 'plus' && this.edad < 100) || (option === 'minus' && this.edad > 0 ) ){
      this.edad = option == 'plus' ? this.edad + 1 : this.edad - 1;

    }
  }

  actualizarPeso = (option:string):void => {
    if(option === 'minus' && this.peso <= 0) return;
      this.peso = option == 'plus' ? this.peso + 1 : this.peso - 1;

  }

  actualizarAltura = (event:number):void => {
    console.log(event);

  }

}
