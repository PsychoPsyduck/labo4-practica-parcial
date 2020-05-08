import { Injectable } from '@angular/core';
import { Actor } from '../clases/actor';
import { Pais } from '../clases/pais';

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  actores : Actor[]
  constructor( ) {
    this.actores=[
      new Actor(1,'Juan','Perez','Masculino','07/12/1993','https://www.jdevoto.cl/web/wp-content/uploads/2018/04/default-user-img.jpg',new Pais('Argentina','Buenos Aires','43590400',"https://restcountries.eu/data/arg.svg")),
      new Actor(2,'Pepe','Perez','Masculino','07/12/1993','https://www.jdevoto.cl/web/wp-content/uploads/2018/04/default-user-img.jpg',new Pais('Argentina','Buenos Aires','43590400',"https://restcountries.eu/data/arg.svg")),
      new Actor(3,'Vanesa','Perez','Femenino','07/12/1993','https://www.jdevoto.cl/web/wp-content/uploads/2018/04/default-user-img.jpg',new Pais('Argentina','Buenos Aires','43590400',"https://restcountries.eu/data/arg.svg")),
      new Actor(4,'Daniel','Perez','Masculino','07/12/1993','https://www.jdevoto.cl/web/wp-content/uploads/2018/04/default-user-img.jpg',new Pais('Argentina','Buenos Aires','43590400',"https://restcountries.eu/data/arg.svg")),
    ]
    localStorage.setItem('actores',JSON.stringify(this.actores));

  }

  obtenerActores(){
    return  this.actores;
  }

  altaActor(actor:Actor){
    this.actores.push( actor );
    localStorage.setItem('actores',JSON.stringify(this.actores));

  }

  obtenerId(){
    let minimo=0;
    this.actores.forEach(element => {
      if(element.id > minimo)
      {
        minimo = element.id;
      }
    });
    return minimo + 2;
  }
}