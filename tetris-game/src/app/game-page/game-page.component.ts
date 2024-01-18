import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TetrisPanelComponent } from '../tetris-panel/tetris-panel.component';
import { ScoreDisplayComponent } from '../score-display/score-display.component';

@Component({
  selector: 'app-game-page',
  standalone: true,
  imports: [
    TetrisPanelComponent,
    ScoreDisplayComponent,
  ],
  templateUrl: './game-page.component.html',
  styleUrl: './game-page.component.scss'
})
export class GamePageComponent {
  @Input() userName: string = '';
  score: number = 0;
  time: number = 0; 

  updateTime(time: number) {
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
}