import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ScoreService } from '../../services/score.service';
import { TimeService } from '../../services/time.service';
import { UserService } from '../../services/user.service';

interface Time {
  hours: number;
  minutes: number;
  seconds: number;
}
@Component({
  selector: 'app-score-display',
  standalone: true,
  imports: [],
  templateUrl: './score-display.component.html',
  styleUrl: './score-display.component.scss'
})

export class ScoreDisplayComponent implements OnInit, OnDestroy {

  userName: string = '';
  seconds: number = 0;
  minutes: number = 0;
  hours: number = 0;
  score: number = 0;
  private scoreSubscription!: Subscription;
  private timeSubscription!: Subscription;

  constructor(private _userService: UserService, private _timeService: TimeService, private _scoreService: ScoreService) { }

  ngOnInit() {
    this.userName = this._userService.getUserData().name;
    this.scoreSubscription = this._scoreService.score$.subscribe(score => this.score = score);
    this.timeSubscription = this._timeService.time$.subscribe((time: Time) => {
      this.seconds = time.seconds;
      this.minutes = time.minutes;
      this.hours = time.hours;
    });
  }

  ngOnDestroy() {
    this.scoreSubscription.unsubscribe();
    this.timeSubscription.unsubscribe();
  }
}
