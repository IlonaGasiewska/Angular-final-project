import { Component } from '@angular/core';
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

}