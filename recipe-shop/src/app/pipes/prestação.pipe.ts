import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'parcela',
})
export class PrestaçãoPipe implements PipeTransform {
  transform(value: any) {
    return value;
  }
}
