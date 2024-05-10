import { Component, OnInit } from '@angular/core';
import { TetrisCoreComponent, TetrisCoreModule } from 'ngx-tetris';
import { TimeService } from '../../services/time.service';
import { ScoreService } from '../../services/score.service';
import { GameHistoryService } from '../../services/gameHistory.service';


@Component({
  selector: 'app-tetris-panel',
  standalone: true,
  imports: [TetrisCoreModule],
  templateUrl: './tetris-panel.component.html',
  styleUrl: './tetris-panel.component.scss'
})
export class TetrisPanelComponent {

  constructor(private _timeService: TimeService, private _scoreService: ScoreService, private _gameHistoryService: GameHistoryService){}

  score = 0;
  seconds = 0;
  minutes = 0;
  hours = 0;
  isTimerRunning = false;
  timerIntervalId: any;

  timerStart() {
    if (!this.isTimerRunning) {
      this.timerIntervalId = setInterval(() => {
        this.seconds += 1;
        if (this.seconds === 60) {
          this.seconds = 0;
          this.minutes += 1;
        }
        if (this.minutes === 60) {
          this.minutes = 0;
          this.hours += 1;
        }
        this._timeService.setGameTime(this.hours, this.minutes, this.seconds)
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
    this.seconds = 0;
    this.minutes = 0;
    this.hours = 0;
    this.score = 0;
    if (!this.isTimerRunning) {
      clearInterval(this.timerIntervalId);
    } else {
      this.isTimerRunning = false;
      this.timerStart();
    }
    this._timeService.setGameTime(this.hours, this.minutes, this.seconds);
    this._scoreService.setScore(this.score);
  }

  onLineCleared() {
    this.score += 10;
    this._scoreService.setScore(this.score);
    console.log(this.score)
    // this.handleButtonClick("Line Cleared")
  }

  handleButtonClick(action: string): void {
    // if (action != "Reset"){
    //   this.isTimerRunning === true && this.gameHistoryService.addGameAction(action)
    // } else {
    //   this.actionClicked.emit(action);
    // }
  }

  onGameOver() {
    alert('game over');
    this.timerStop();
  }
}
