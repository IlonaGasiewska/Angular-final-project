import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TimeService {
  private _gameTime = new BehaviorSubject<{ hours: number, minutes: number, seconds: number }>({ hours: 0, minutes: 0, seconds: 0 });

  time$ = this._gameTime.asObservable();

  constructor() { }

  getGameTime(): { hours: number, minutes: number, seconds: number } {
    return this._gameTime.value;
  }

  setGameTime(hours: number, minutes: number, seconds: number): void {
    this._gameTime.next({ hours, minutes, seconds });
  }
}
