import { Component, OnInit } from '@angular/core';
import { ObtenerDatosEngService } from 'src/app/services/obtener-datos-eng.service';
import { Subscription }  from 'rxjs';
@Component({
  selector: 'app-informacion-english',
  templateUrl: './informacion-english.component.html',
  styleUrls: ['./informacion-english.component.css']
})
export class InformacionEnglishComponent implements OnInit {

  info: any;
  subscription?: Subscription;
  constructor(
    private datosPorfolio:ObtenerDatosEngService
  ) {}

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe( data =>{
      this.info = data.sobreMi;
    })
  }

}
