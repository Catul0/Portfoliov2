import { Component, OnInit } from '@angular/core';
import { ObtenerDatosService } from '../../services/obtener-datos.service';
import { Subscription }  from 'rxjs';
@Component({
  selector: 'app-portada',
  templateUrl: './portada.component.html',
  styleUrls: ['./portada.component.css']
})
export class PortadaComponent implements OnInit {

  portadaa: any;
  subscription?: Subscription;
  constructor(private datosPorfolio:ObtenerDatosService) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe( data =>{
      this.portadaa = data.portada;
    })
  }
}
