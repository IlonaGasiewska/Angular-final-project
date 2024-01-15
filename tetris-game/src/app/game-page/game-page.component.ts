import { Component, Input } from '@angular/core';
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

  onLineCleared(score: number) {
    this.score = score;
  }
}
