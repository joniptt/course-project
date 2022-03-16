/*
https://docs.nestjs.com/pipes
*/

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'preco',
})
export class PrecoPipe implements PipeTransform {
  transform(value: number) {
    const precoFormat = value.toFixed(2);

    return precoFormat;
  }
}
