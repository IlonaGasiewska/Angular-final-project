import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface ITime { 
  hours: number, 
  minutes: number, 
  seconds: number 
}

@Injectable({
  providedIn: 'root'
})

export class TimeService {
  private _gameTime = new BehaviorSubject<ITime>({ hours: 0, minutes: 0, seconds: 0 });

  time$ = this._gameTime.asObservable();

  constructor() {}

  public getGameTime(): { hours: number, minutes: number, seconds: number } {
    return this._gameTime.value;
  };

  public setGameTime(hours: number, minutes: number, seconds: number): void {
    this._gameTime.next({ hours, minutes, seconds });
  };
};
