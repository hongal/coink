import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dot'
})
export class DotPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let str = value.toString();
    if(value.toString().indexOf('.') > 0){
      str = value.toString().substr(0, value.toString().indexOf('.'));
    }
    return str;
  }

}
