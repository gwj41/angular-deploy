import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bookfilter'
})
export class BookfilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value + 'Robbie Gu!';
  }

}
