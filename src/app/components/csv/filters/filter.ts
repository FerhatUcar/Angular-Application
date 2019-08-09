import {Pipe, PipeTransform} from "@angular/core";

@Pipe({name: 'filter'})
export class FilterPipe implements PipeTransform {
  transform(items: any[], field: string): any[] {
    if (!items) return [];
    if (!field) return items;
    return items.filter(i =>
      [i.issues].includes(field.toLowerCase()));
  }
}
