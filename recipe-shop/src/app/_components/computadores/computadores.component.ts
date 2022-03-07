import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-computadores',
  templateUrl: './computadores.component.html',

  styleUrls: ['./computadores.component.css'],
})
export class ComputadoresComponent implements OnInit {
  computadores: {}[] = [
    {
      nome: 'Placa-mãe',
      preco: 399.99,
      img: './assets/img/placa-mae.png',
    },
    {
      nome: 'Placa-mãe',
      preco: 399.99,
      img: './assets/img/placa-mae.png',
    },
  ];
  constructor() {}

  ngOnInit() {}
}
