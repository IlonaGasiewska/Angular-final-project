import { Component } from '@angular/core';
import { TetrisPanelComponent } from '../tetris-panel/tetris-panel.component';
import { ScoreDisplayComponent } from '../score-display/score-display.component';
import { UserActionHistoryComponent } from '../user-action-history/user-action-history.component';
import { Router, ActivatedRoute } from '@angular/router'
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-game-page',
  standalone: true,
  imports: [
    TetrisPanelComponent,
    ScoreDisplayComponent,
    UserActionHistoryComponent,
    NgClass
  ],
  templateUrl: './game-page.component.html',
  styleUrl: './game-page.component.scss'
})
export class GamePageComponent {
  public selectedTheme:string='';

  constructor(private _router: Router, private _route: ActivatedRoute ) {
  }

  ngOnInit(): void {
    this._route.params.subscribe((params: { [key: string]: string }) => {
      this.selectedTheme = params['theme']; 
    });
  };

  changePage(){
    this._router.navigate(['/welcome']);
  };
  
}