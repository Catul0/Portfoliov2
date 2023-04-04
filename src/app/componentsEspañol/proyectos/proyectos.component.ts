import { Component, OnInit } from '@angular/core';
import { ObtenerDatosService } from '../../services/obtener-datos.service';
import { Subscription }  from 'rxjs';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyectos: any;
  subscription?: Subscription;

  constructor(
    private datosPorfolio:ObtenerDatosService
  ) {}

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe( proyectos =>{
      this.proyectos = proyectos.misProyectos;
    })
  }
}
