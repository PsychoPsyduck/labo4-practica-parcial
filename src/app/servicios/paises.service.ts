import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pais } from '../clases/pais';

@Injectable({
  providedIn: 'root'
})
export class PaisesService implements OnInit {

  paisesLocal:Pais[]=[];
  constructor( private httpClient:HttpClient) {

    this.httpClient.get('https://restcountries.eu/rest/v2/region/americas').subscribe( (datos:any)=>{
      let id=1;
      datos.forEach(element => {
        this.paisesLocal.push( new Pais(element.name,element.capital,element.population,element.flag,id))
        id++;
      });
    });
   }

  ngOnInit(): void {
  }


  obtenerPaises(){
    //return this.httpClient.get('https://restcountries.eu/rest/v2/region/americas');

    console.log(this.paisesLocal);
    return this.paisesLocal;
  }
  deshabilitarPais( paisDesabilita: Pais ){

    let idEliminar;
    for (let index = 0; index < this.paisesLocal.length; index++) {
      if( paisDesabilita.id == this.paisesLocal[index].id ){
        idEliminar = index;
      }
    }
    this.paisesLocal.splice(idEliminar,1);    

  }
}