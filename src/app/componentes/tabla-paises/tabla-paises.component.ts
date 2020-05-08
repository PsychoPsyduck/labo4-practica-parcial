import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PaisesService } from 'src/app/servicios/paises.service';
import { Pais } from 'src/app/clases/pais';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css']
})
export class TablaPaisesComponent implements OnInit {
  @Output() paisSelected = new EventEmitter<Pais>();
  @Input() paises;
  constructor( private paisesS: PaisesService) { }

  ngOnInit(): void {

  }

  seleccionPais( paisSelecionado ){

    this.paisSelected.emit( new Pais(paisSelecionado.name, paisSelecionado.capital, paisSelecionado.population, paisSelecionado.flag) );

  }

}