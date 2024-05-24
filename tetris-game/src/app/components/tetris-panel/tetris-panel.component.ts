import { Component, OnInit } from '@angular/core';
import { TetrisCoreComponent, TetrisCoreModule } from 'ngx-tetris';
import { TimeService } from '../../services/time.service';
import { ScoreService } from '../../services/score.service';
import { GameHistoryService } from '../../services/gameHistory.service';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-tetris-panel',
  standalone: true,
  imports: [TetrisCoreModule],
  templateUrl: './tetris-panel.component.html',
  styleUrl: './tetris-panel.component.scss'
})
export class TetrisPanelComponent {
  name: string = ""
  token: string = "0";
  score: number = 0;
  seconds: number = 0;
  minutes: number = 0;
  hours: number = 0;
  isTimerRunning:boolean= false;
  timerIntervalId: any;

  constructor(
    private _timeService: TimeService, 
    private _scoreService: ScoreService, 
    private _gameHistoryService: GameHistoryService,
    private _userService: UserService
  ){
    this.name = _userService.getUserData().name
    this.token = _userService.getUserData().token
  }

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
    this._scoreService.postScore({name: this.name, score: this.score, token: this.token}).subscribe();
  };
}
