import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrecoPipe } from '../pipes/preco.pipe';
import { PrestaçãoPipe } from '../pipes/prestação.pipe';
import { MousesComponent } from './mouses/mouses.component';
import { PlacaMaeComponent } from './placa-mae/placa-mae.component';
import { ProcessadorComponent } from './processador/processador.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { TecladosComponent } from './teclados/teclados.component';

@NgModule({
  declarations: [
    SideBarComponent,
    PlacaMaeComponent,
    PrecoPipe,
    PrestaçãoPipe,
    ProcessadorComponent,
    MousesComponent,
    TecladosComponent,
  ],
  imports: [CommonModule],
  exports: [
    SideBarComponent,
    PlacaMaeComponent,
    PrecoPipe,
    PrestaçãoPipe,
    MousesComponent,
    ProcessadorComponent,
  ],
})
export class ComponentModule {}
