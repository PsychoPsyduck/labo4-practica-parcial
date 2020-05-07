import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pelicula-tabla',
  templateUrl: './pelicula-tabla.component.html',
  styleUrls: ['./pelicula-tabla.component.css']
})
export class PeliculaTablaComponent implements OnInit {

  @Output() peliculaSeleccionada = new EventEmitter();

  @Input() peliculas; 
  constructor() { }

  ngOnInit(): void {

  }

  verDetalles( pelicula ){
    this.peliculaSeleccionada.emit(pelicula);
  }

}