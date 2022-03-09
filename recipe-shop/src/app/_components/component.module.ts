import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrecoPipe } from '../pipes/preco.pipe';
import { PrestaçãoPipe } from '../pipes/prestação.pipe';
import { PlacaMaeComponent } from './placa-mae/placa-mae.component';
import { SideBarComponent } from './side-bar/side-bar.component';

@NgModule({
  declarations: [SideBarComponent, PlacaMaeComponent, PrecoPipe, PrestaçãoPipe],
  imports: [CommonModule],
  exports: [SideBarComponent, PlacaMaeComponent, PrecoPipe, PrestaçãoPipe],
})
export class ComponentModule {}
