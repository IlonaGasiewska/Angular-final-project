import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-action-history',
  standalone: true,
  imports: [NgForOf, FormsModule],
  templateUrl: './user-action-history.component.html',
  styleUrl: './user-action-history.component.scss'
})
export class UserActionHistoryComponent {
  gameHistory = ["start game", "start game", "button left", "button right" ,"pause", "pause","rotate", "down", "drop", "start game", "start game", "button left", "button right" ,"pause", "pause","rotate", "down", "drop"];
  
  selectedAction: string = "all";

  get filteredGameHistory() {
    if (this.selectedAction === "all") {
      return this.gameHistory;
    } else {
      return this.gameHistory.filter((e) => e.includes(this.selectedAction));
    }
  }
}
