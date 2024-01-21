import { NgForOf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-action-history',
  standalone: true,
  imports: [NgForOf, FormsModule],
  templateUrl: './user-action-history.component.html',
  styleUrl: './user-action-history.component.scss'
})
export class UserActionHistoryComponent {
  @Input() actions: { action: string; time: { seconds: number; minutes: number; hours: number } }[] = [];
  
  selectedAction: string = "All";

  get filteredActions() {
    if (this.selectedAction === "All") {
      return this.actions;
    } else {
      return this.actions.filter((e) => e.action.includes(this.selectedAction));
    }
  }
}
