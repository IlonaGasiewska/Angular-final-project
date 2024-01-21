import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TetrisPanelComponent } from '../tetris-panel/tetris-panel.component';
import { ScoreDisplayComponent } from '../score-display/score-display.component';
import { UserActionHistoryComponent } from '../user-action-history/user-action-history.component';

@Component({
  selector: 'app-game-page',
  standalone: true,
  imports: [
    TetrisPanelComponent,
    ScoreDisplayComponent,
    UserActionHistoryComponent
  ],
  templateUrl: './game-page.component.html',
  styleUrl: './game-page.component.scss'
})
export class GamePageComponent {
  @Input() userName: string = '';
  score: number = 0;
  time: { seconds: number; minutes: number; hours: number } = { seconds: 0, minutes: 0, hours: 0 };

  updateTime(time: { seconds: number; minutes: number; hours: number }) {
    this.time = time;
  }

  onLineCleared(score: number) {
    this.score = score;
  }

  @Input() welcomePageShouldBeVisible: boolean = false;
  @Output() pageChange = new EventEmitter<void>();

  changePage() {
    this.pageChange.emit();
  }

  userActions: { action: string; time: { seconds: number; minutes: number; hours: number } }[] = [];

  handleActionClicked(action: string): void {
    if (action === 'Reset') {
      this.userActions = [];
    } else {
      this.userActions.push({ action: action, time: this.time });
    }
  }
}