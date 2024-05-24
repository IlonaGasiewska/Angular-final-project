import { Component } from '@angular/core';
import { TetrisPanelComponent } from '../tetris-panel/tetris-panel.component';
import { ScoreDisplayComponent } from '../score-display/score-display.component';
import { UserActionHistoryComponent } from '../user-action-history/user-action-history.component';
import { Router } from '@angular/router'

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

  constructor(private router: Router ) {}

  changePage(){
    this.router.navigate(['/welcome']);
  }
  
}