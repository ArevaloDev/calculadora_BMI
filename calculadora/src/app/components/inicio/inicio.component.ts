import { Component } from '@angular/core';
import { GeneroService } from '../../services/genero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

  public edad:number = 18;
  public peso:number = 10;
  public altura:number = 140;
  public genero:string = 'Masculino';

  constructor(
    private generoService:GeneroService,
    private router:Router

  ){}


  actualizarEdad = (option:string,):void => {
    this.edad = this.generoService.actualizarEdad(option, this.edad);
  }

  actualizarPeso = (option:string):void => {
    this.peso = this.generoService.actualizarPeso(option, this.peso);
  }


  actualizarGenero = (genero:string):void => {
    this.genero = this.generoService.actualizarGenero(genero);
  }

  calcularBMI = ():void => {
    this.router.navigate(['/resultado'])
  }

}
