import { Component, OnInit } from '@angular/core';
import { Processador } from 'src/app/models/processador.model';
import { PecasService } from 'src/app/services/produtos.service';

@Component({
  selector: 'processadores',
  templateUrl: './processador.component.html',
  styleUrls: ['./processador.component.css'],
})
export class ProcessadorComponent implements OnInit {
  processadores: Processador[] = [];
  constructor(private pecas: PecasService) {}

  ngOnInit() {
    this.pecas.getProcessador().subscribe((res) => {
      this.processadores = res;
    });
  }
}
