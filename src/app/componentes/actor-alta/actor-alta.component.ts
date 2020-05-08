import { Component, OnInit } from '@angular/core';
import { PaisesService } from 'src/app/servicios/paises.service';

import { Pais } from 'src/app/clases/pais';

@Component({
  selector: 'app-actor-alta',
  templateUrl: './actor-alta.component.html',
  styleUrls: ['./actor-alta.component.css']
})
export class ActorAltaComponent implements OnInit {

  
  paises:Pais[];

  constructor( private paisesService:PaisesService ) { }

  ngOnInit(): void {
    this.paises = this.paisesService.obtenerPaises();
  }

}
