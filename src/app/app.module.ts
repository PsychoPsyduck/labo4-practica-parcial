import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';
import { PeliculaAltaComponent } from './componentes/pelicula-alta/pelicula-alta.component';
import { ActorAltaComponent } from './componentes/actor-alta/actor-alta.component';
import { ActorListadoComponent } from './componentes/actor-listado/actor-listado.component';
import { PeliculaListadoComponent } from './componentes/pelicula-listado/pelicula-listado.component';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { MaterialComponent } from './componentes/material/material.component';
import { FormsModule } from '@angular/forms';
import { PeliculaTablaComponent } from './componentes/pelicula-tabla/pelicula-tabla.component';
import { PeliculaService } from './servicios/pelicula.service';
import { ActorService } from './servicios/actor.service';
import { TablaActorComponent } from './componentes/tabla-actor/tabla-actor.component';
import { DetallePeliculaComponent } from './componentes/detalle-pelicula/detalle-pelicula.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { PaisesListadoComponent } from './componentes/paises-listado/paises-listado.component';
import { DetallePaisComponent } from './componentes/detalle-pais/detalle-pais.component';
import { HttpClientModule } from '@angular/common/http';
import { TablaPaisesComponent } from './componentes/tabla-paises/tabla-paises.component';
import { DetalleActorComponent } from './componentes/detalle-actor/detalle-actor.component'

@NgModule({
  declarations: [
    AppComponent,
    BusquedaComponent,
    PeliculaAltaComponent,
    ActorAltaComponent,
    ActorListadoComponent,
    PeliculaListadoComponent,
    BienvenidoComponent,
    PeliculaTablaComponent,
    TablaActorComponent,
    DetallePeliculaComponent,
    CabeceraComponent,
    PaisesListadoComponent,
    DetallePaisComponent,
    TablaPaisesComponent,
    DetalleActorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    MaterialComponent
  ],
  providers: [
    PeliculaService,
    ActorService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
