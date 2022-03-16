import { Component, OnInit } from '@angular/core';
import { PlacaMae } from 'src/app/models/placa-mae.model';
import { PecasService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-placa-mae',
  templateUrl: './placa-mae.component.html',
  styleUrls: ['./placa-mae.component.css'],
})
export class PlacaMaeComponent implements OnInit {
  placaMae: PlacaMae[] = [];
  constructor(private pecas: PecasService) {}

  ngOnInit() {
    this.pecas.getPlacaMae().subscribe((res) => {
      this.placaMae = res;
    });
  }
}
