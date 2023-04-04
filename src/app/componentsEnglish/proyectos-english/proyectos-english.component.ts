import { Component, OnInit } from '@angular/core';
import { ObtenerDatosEngService } from 'src/app/services/obtener-datos-eng.service';
import { Subscription }  from 'rxjs';
@Component({
  selector: 'app-proyectos-english',
  templateUrl: './proyectos-english.component.html',
  styleUrls: ['./proyectos-english.component.css']
})
export class ProyectosEnglishComponent implements OnInit {

  proyectos: any;
  subscription?: Subscription;

  constructor(
    private datosPorfolio:ObtenerDatosEngService
  ) {}

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe( proyectos =>{
      this.proyectos = proyectos.misProyectos;
    })
  }
}
