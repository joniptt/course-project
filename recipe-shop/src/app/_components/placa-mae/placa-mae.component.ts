import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-placa-mae',
  templateUrl: './placa-mae.component.html',
  styleUrls: ['./placa-mae.component.css'],
})
export class PlacaMaeComponent implements OnInit {
  computadores: {}[] = [
    {
      nome: 'Placa-mãe',
      preco: 399.99,
      img: './assets/img/PlacaB450.png',
    },
    {
      nome: 'Placa-mãe',
      preco: 850,
      img: './assets/img/placa-mae.png',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
