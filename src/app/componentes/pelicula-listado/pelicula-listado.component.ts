import { Component, OnInit } from '@angular/core';
import { PeliculaService } from 'src/app/servicios/pelicula.service';
import { Pelicula } from 'src/app/clases/pelicula';
import { timer } from 'rxjs';


@Component({
  selector: 'app-pelicula-listado',
  templateUrl: './pelicula-listado.component.html',
  styleUrls: ['./pelicula-listado.component.css']
})
export class PeliculaListadoComponent implements OnInit {

  peliculas: Pelicula[];
  peliculaSeleccionada: Pelicula;
  constructor( private peliculaService: PeliculaService) { }

  ngOnInit(): void {
    this.peliculas = this.peliculaService.obtenerPelicula();
  }

  enviarPeliculaSeleccionada( event ){
    this.peliculaSeleccionada = event;
  }

  eliminar( id ){
    this.peliculaService.eliminarPelicula(id);
    this.peliculas=this.peliculaService.obtenerPelicula();
  }
}