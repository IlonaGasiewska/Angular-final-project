import { NgForOf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GameHistorySortPipe } from './game-history-sort.pipe';

@Component({
  selector: 'app-user-action-history',
  standalone: true,
  imports: [NgForOf, FormsModule],
  templateUrl: './user-action-history.component.html',
  styleUrl: './user-action-history.component.scss'
})
export class UserActionHistoryComponent {
  @Input() actions: { action: string; time: { seconds: number; minutes: number; hours: number } }[] = [];
  selectedAction: string = 'All';
  selectedSorting: string = 'First';

  get filteredActions() {
    let filtered = this.actions;

    if (this.selectedAction !== 'All') {
      filtered = filtered.filter((e) => e.action.includes(this.selectedAction));
    }

    return new GameHistorySortPipe().transform(filtered, this.selectedSorting);
  }
}