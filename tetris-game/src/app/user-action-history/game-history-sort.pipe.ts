import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gameHistorySort',
})
export class GameHistorySortPipe implements PipeTransform {
  transform(items: any[], selectedSorting: string): any[] {
    if (selectedSorting !== 'First') {
      return items.reverse();
    } else {
      return items;
    }
  }
}