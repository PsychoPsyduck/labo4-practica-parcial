import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';
import { PeliculaAltaComponent } from './componentes/pelicula-alta/pelicula-alta.component';
import { PeliculaListadoComponent } from './componentes/pelicula-listado/pelicula-listado.component';
import { PeliculasComponent } from './componentes/peliculas/peliculas.component';
import { ActoresComponent } from './componentes/actores/actores.component';
import { ActorAltaComponent } from './componentes/actor-alta/actor-alta.component';
import { ActorListadoComponent } from './componentes/actor-listado/actor-listado.component';


const routes: Routes = [
  {path: '', component: BienvenidoComponent},
  {path: 'bienvenido', component: BienvenidoComponent},
  {path: 'busqueda', component: BusquedaComponent},
  { path: 'peliculas', 
    component: PeliculasComponent ,
    children:
      [{path: 'alta' , component: PeliculaAltaComponent},
      {path: 'listado' , component: PeliculaListadoComponent}]
  },
  { path: 'actor', 
    component: ActoresComponent ,
    children:
      [{path: 'alta' , component: ActorAltaComponent},
      {path: 'listado' , component: ActorListadoComponent}]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
