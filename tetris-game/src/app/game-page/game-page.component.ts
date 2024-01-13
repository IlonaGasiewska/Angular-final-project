import { Component } from '@angular/core';
import { TetrisPanelComponent } from '../tetris-panel/tetris-panel.component';

@Component({
  selector: 'app-game-page',
  standalone: true,
  imports: [TetrisPanelComponent],
  templateUrl: './game-page.component.html',
  styleUrl: './game-page.component.scss'
})
export class GamePageComponent {

}
