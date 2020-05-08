import { Component, OnInit } from '@angular/core';
import { PaisesService } from 'src/app/servicios/paises.service';
import { Pais } from 'src/app/clases/pais';

@Component({
  selector: 'app-paises-listado',
  templateUrl: './paises-listado.component.html',
  styleUrls: ['./paises-listado.component.css']
})
export class PaisesListadoComponent implements OnInit {

  paisesServicio;
  paisSeleccionado:Pais;
  constructor( private paisesService:PaisesService ) { }

  ngOnInit(): void {
    this.paisesService.obtenerPaises().subscribe( resp=>{
      console.log(resp);
      this.paisesServicio = resp;
    })
  }

  verDetalles( pais ){
    this.paisSeleccionado = pais;
  }

  deshabilitandoPais( paisADesabilitar ){


  }
}