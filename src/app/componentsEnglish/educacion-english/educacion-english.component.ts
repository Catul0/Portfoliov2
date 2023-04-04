import { Component, OnInit } from '@angular/core';
import { ObtenerDatosEngService } from 'src/app/services/obtener-datos-eng.service';
import { Subscription }  from 'rxjs';
@Component({
  selector: 'app-educacion-english',
  templateUrl: './educacion-english.component.html',
  styleUrls: ['./educacion-english.component.css']
})
export class EducacionEnglishComponent implements OnInit {

  ubscription?: Subscription;
  miEducation: any;
  constructor(private datosPorfolio: ObtenerDatosEngService) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data => {

      this.miEducation = data.educacion;
    })

  }
}
