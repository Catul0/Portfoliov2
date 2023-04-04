import { Component, OnInit } from '@angular/core';
import { ObtenerDatosEngService } from 'src/app/services/obtener-datos-eng.service';
import { Subscription }  from 'rxjs';
@Component({
  selector: 'app-portada-english',
  templateUrl: './portada-english.component.html',
  styleUrls: ['./portada-english.component.css']
})
export class PortadaEnglishComponent implements OnInit {

  portadaa: any;
  subscription?: Subscription;
  constructor(private datosPorfolio:ObtenerDatosEngService) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe( data =>{
      this.portadaa = data.portada;
    })
  }
}
