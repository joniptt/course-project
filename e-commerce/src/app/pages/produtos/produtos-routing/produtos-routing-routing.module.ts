import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MousesComponent } from 'src/app/_components/mouses/mouses.component';
import { PlacaMaeComponent } from 'src/app/_components/placa-mae/placa-mae.component';
import { ProcessadorComponent } from 'src/app/_components/processador/processador.component';
import { TecladosComponent } from 'src/app/_components/teclados/teclados.component';
import { ProdutosComponent } from '../produtos.component';

const productRoutes: Routes = [
  {
    path: 'produtos',
    component: ProdutosComponent,
    children: [
      { path: 'placa-mae', component: PlacaMaeComponent },
      { path: 'mouses', component: MousesComponent },
      { path: 'teclados', component: TecladosComponent },
      { path: 'processadores', component: ProcessadorComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(productRoutes)],
  exports: [RouterModule],
})
export class ProdutosRoutingRoutingModule {}
