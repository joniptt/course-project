import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: any, filter: string, recName: string) {
    if (value.length === 0 || filter === '') {
      return value;
    }
    const recArray = [];
    for (let data of value) {
      if (data[recName] === filter) {
        recArray.push(data);
      }
    }
    return recArray;
  }
}
