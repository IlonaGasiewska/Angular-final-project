import { Pipe, PipeTransform } from '@angular/core';
import { IAction } from '../../services/gameHistory.service';

@Pipe({
  name: 'gameHistorySort',
})
export class GameHistorySortPipe implements PipeTransform {
  transform(items:IAction[], selectedSorting: string): IAction[] {
    if (selectedSorting !== 'First') {
      return items.slice().reverse();
    } else {
      return items;
    }
  }
}