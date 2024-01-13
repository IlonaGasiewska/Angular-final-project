import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TetrisPanelComponent } from './tetris-panel/tetris-panel.component';
import { GamePageComponent } from './game-page/game-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    GamePageComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'tetris-game';
}
