import { Component, NgModule,  Output, EventEmitter } from '@angular/core';
import { TetrisCoreComponent, TetrisCoreModule } from 'ngx-tetris';

@Component({
  selector: 'app-tetris-panel',
  standalone: true,
  imports: [TetrisCoreModule],
  templateUrl: './tetris-panel.component.html',
  styleUrl: './tetris-panel.component.scss'
})

export class TetrisPanelComponent {

  @Output() lineCleared = new EventEmitter<number>();

  score = 0;

  onLineCleared() {
    this.score += 10;
    this.lineCleared.emit(this.score);
  }
}
