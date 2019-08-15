import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {
  public transform(items: any[], field: string): any[] {
    if (!items) { return []; }
    if (!field) { return items; }

    return items.filter(i => {
      console.log(field);
      console.log(i.issues);

      return i.issues >= field;
    });
  }
}
