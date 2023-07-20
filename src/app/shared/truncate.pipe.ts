import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, maxLength: number, overflowIndicator: string): string {
    if (value) {
      return value.length < maxLength
        ? value
        : value.slice(0, maxLength) + overflowIndicator;
    }
    else {
      return value;
    }
  }

}
