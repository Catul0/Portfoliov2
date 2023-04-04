import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './componentsEspañol/nav/nav.component';
import { PortadaComponent } from './componentsEspañol/portada/portada.component';
import { InformacionComponent } from './componentsEspañol/informacion/informacion.component';
import { EducacionComponent } from './componentsEspañol/educacion/educacion.component';
import { HabilidadesComponent } from './componentsEspañol/habilidades/habilidades.component';
import { ProyectosComponent } from './componentsEspañol/proyectos/proyectos.component';
import { FooterComponent } from './componentsEspañol/footer/footer.component';
import { InicioComponent } from './componentsEspañol/inicio/inicio.component';
import { NavEnglishComponent } from './componentsEnglish/nav-english/nav-english.component';
import { EducacionEnglishComponent } from './componentsEnglish/educacion-english/educacion-english.component';
import { HablidadesEnglishComponent } from './componentsEnglish/hablidades-english/hablidades-english.component';
import { InformacionEnglishComponent } from './componentsEnglish/informacion-english/informacion-english.component';
import { HomeComponent } from './componentsEnglish/home/home.component';
import { PortadaEnglishComponent } from './componentsEnglish/portada-english/portada-english.component';
import { ProyectosEnglishComponent } from './componentsEnglish/proyectos-english/proyectos-english.component';
import { ContactoComponent } from './componentsEspañol/contacto/contacto.component';
import { ContactEnglishComponent } from './componentsEnglish/contact-english/contact-english.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PortadaComponent,
    InformacionComponent,
    EducacionComponent,
    HabilidadesComponent,
    ProyectosComponent,
    FooterComponent,
    InicioComponent,
    NavEnglishComponent,
    EducacionEnglishComponent,
    HablidadesEnglishComponent,
    InformacionEnglishComponent,
    HomeComponent,
    PortadaEnglishComponent,
    ProyectosEnglishComponent,
    ContactoComponent,
    ContactEnglishComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
