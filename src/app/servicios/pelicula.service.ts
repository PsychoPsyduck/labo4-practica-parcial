
import { Injectable } from '@angular/core';
import { Pelicula } from '../clases/pelicula';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  //host= 'https://parciallabo4.firebaseio.com/';
  Pelicula: Pelicula[];
  constructor() { 


    this.Pelicula = [
      new Pelicula(1,'Avengers','Accion','01/01/2000',100,'https://i.pinimg.com/originals/29/f5/b7/29f5b7e2e1f05c14508b8f1d4ee794ad.jpg'),
      new Pelicula(2,'Avengers 2','Accion','01/01/2001',100,'https://i.pinimg.com/originals/29/f5/b7/29f5b7e2e1f05c14508b8f1d4ee794ad.jpg'),
      new Pelicula(3,'Avengers 3','Accion','01/01/2002',100,'https://i.pinimg.com/originals/29/f5/b7/29f5b7e2e1f05c14508b8f1d4ee794ad.jpg'),
      new Pelicula(4,'Avengers 4','Accion','01/01/2003',100,'https://i.pinimg.com/originals/29/f5/b7/29f5b7e2e1f05c14508b8f1d4ee794ad.jpg'),
    ]
    localStorage.setItem('Pelicula',JSON.stringify(this.Pelicula));

  }


  altaPelicula(){


  }

  obtenerPelicula(){
    
    return JSON.parse(localStorage.getItem('Pelicula'));
  }

  eliminarPelicula( id ){
    let idEliminar;
    for (let index = 0; index < this.Pelicula.length; index++) {
      if( id == this.Pelicula[index].id ){
        idEliminar = index;
      }
    }
    this.Pelicula.splice(idEliminar,1);
    localStorage.setItem('Pelicula',JSON.stringify(this.Pelicula));
  }
}