import { Pipe, PipeTransform } from '@angular/core';
import { Recipe } from '../models/recipe.model';
@Pipe({
  name: 'slice',
})
export class SlicePipe implements PipeTransform {
  transform(value: Recipe[], index: number) {
    var reci: Recipe;
    for (let data of value) {
      if (data[index] === value[index]) {
        reci = data;
      }
    }
    return reci;
  }
}
