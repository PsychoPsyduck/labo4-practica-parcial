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
    this.paisesServicio = this.paisesService.obtenerPaises();
  }

  verDetalles( pais ){
    this.paisSeleccionado = pais;
  }

  deshabilitandoPais( paisADesabilitar ){
    console.log(paisADesabilitar);
    this.paisesService.deshabilitarPais( paisADesabilitar );
    this.paisesServicio=this.paisesService.obtenerPaises();

  }
}