import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pais } from 'src/app/clases/pais';

@Component({
  selector: 'app-detalle-pais',
  templateUrl: './detalle-pais.component.html',
  styleUrls: ['./detalle-pais.component.css']
})
export class DetallePaisComponent implements OnInit {

  @Output() deshabilitarPais = new EventEmitter<Pais>();
  @Input() detallePais:Pais;
  constructor() { }

  ngOnInit(): void {
  }

  desabilitar(){

    this.deshabilitarPais.emit( this.detallePais );
    this.detallePais=null;
  }
}