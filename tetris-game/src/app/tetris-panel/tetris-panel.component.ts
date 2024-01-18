import { Component, NgModule, Output, EventEmitter } from '@angular/core';
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
@Output() updateTime = new EventEmitter<number>();

score = 0;
time = 0;
isTimerRunning = false;
timerIntervalId: any;

timerStart() {
  if (!this.isTimerRunning) {
    this.timerIntervalId = setInterval(() => {
      this.time += 1;
      this.updateTime.emit(this.time);
    }, 1000);
    this.isTimerRunning = true;
  }
}

timerStop() {
  if (this.isTimerRunning) {
    clearInterval(this.timerIntervalId);
    this.isTimerRunning = false;
  }
}

timerReset() {
  clearInterval(this.timerIntervalId);
  this.time = 0;
  if(!this.isTimerRunning){
    clearInterval(this.timerIntervalId);
    this.updateTime.emit(this.time);
  } else {
    this.isTimerRunning= false;
    this.timerStart();
    this.updateTime.emit(this.time);
  }
}

onLineCleared() {
    this.score += 10;
    this.lineCleared.emit(this.score);
  }
}