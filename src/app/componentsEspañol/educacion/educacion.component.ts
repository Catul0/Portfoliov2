import { Component, OnInit } from '@angular/core';
import { ObtenerDatosService } from '../../services/obtener-datos.service';
import { Subscription }  from 'rxjs';
@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  subscription?: Subscription;
  miEducation: any;
  constructor(private datosPorfolio: ObtenerDatosService) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data => {

      this.miEducation = data.educacion;
    })

  }
}
