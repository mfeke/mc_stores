import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterName'
})
export class FilterNamePipe implements PipeTransform {

  transform(items: any[], name: string): any[] {
    if (!items || !name) return items;
    return items.filter(item => item.name === name);
  }

}

