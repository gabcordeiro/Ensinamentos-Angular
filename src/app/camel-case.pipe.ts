import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCase'
})
export class CamelCasePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    let values = value.split(' ');
    let result = '';

    for(let v of values){
      result+=this.Capitalize(v);
    }

    return result;
  }

  Capitalize(value:string){
    return value
    .split(' ')
    .map((el: string) => el.slice(0,1).toUpperCase()+ el.slice(1).toLowerCase())
    .join(' ')
  }

}
