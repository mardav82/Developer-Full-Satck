import { Component, OnInit } from '@angular/core';
// Importamos todo el contenido y lo renombramos "tarjetas"
import * as tarjetas from '../../../assets/tarjetas.json'

@Component({
  selector: 'app-tarjetero',
  templateUrl: './tarjetero.component.html',
  styleUrls: ['./tarjetero.component.scss']
})
export class TarjeteroComponent implements OnInit {

  constructor() { }

  categoria = 'Hoteles';
  titulo = 'Viaja a Bariloche';
  flex = true;
  dataTarjetas = tarjetas;

  ngOnInit(): void {
    console.log(this.dataTarjetas);
    // console.log(tarjetas);
  }

}
