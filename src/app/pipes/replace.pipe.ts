import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replace'
})
export class ReplacePipe implements PipeTransform {

  transform(value: string, search: string, replacement: string): string {
    if (!value) return '';
    if (!search) return value;

    // Globally replaces all matches of the target substring
    return value.replaceAll(search, replacement);
  }
}


