import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneroService {


  constructor() { }

  actualizarEdad = (option:string, edad:number):number => {
    if((option === 'plus' && edad < 100) || (option === 'minus' && edad > 0 ) ){
      return edad = option == 'plus' ? edad + 1 : edad - 1;
    }
    return edad;
  }

  actualizarPeso = (option:string, peso:number): number => {
    if(option === 'minus' && peso <= 0) return 0;
      return  peso = option == 'plus' ? peso + 1 : peso - 1;
  }

  actualizarGenero = (genero:string): string => {
    return genero = genero === 'M' ? 'Masculino' : 'Femenino';
  }


}
