import { Component, OnInit } from '@angular/core';
import { ActorService } from 'src/app/servicios/actor.service';

@Component({
  selector: 'app-actor-listado',
  templateUrl: './actor-listado.component.html',
  styleUrls: ['./actor-listado.component.css']
})
export class ActorListadoComponent implements OnInit {

  actores;
  constructor(private actorService:ActorService) { 

  }

  ngOnInit(): void {
    this.actores= this.actorService.obtenerActores();
  }

}