import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataBr'
})
export class DataBrPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if (!value) {
      return '';
    }
    const dataArr = value.split('-');
    if (dataArr.length !== 3) {
      return null;
    }
    return dataArr[2] + '/' + dataArr[1] + '/' + dataArr[0];
  }

}
