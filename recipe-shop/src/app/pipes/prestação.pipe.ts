import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'parcela',
})
export class PrestaçãoPipe implements PipeTransform {
  transform(value: number) {
    let prestacao = value / 12;
    const parcelado = prestacao.toFixed(2);

    return parcelado;
  }
}
