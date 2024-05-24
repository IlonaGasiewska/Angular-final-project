import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TimeService {
  private gameTime = new BehaviorSubject<{ hours: number, minutes: number, seconds: number }>({ hours: 0, minutes: 0, seconds: 0 });

  time$ = this.gameTime.asObservable();

  constructor() { }

  getGameTime(): { hours: number, minutes: number, seconds: number } {
    return this.gameTime.value;
  }

  setGameTime(hours: number, minutes: number, seconds: number): void {
    this.gameTime.next({ hours, minutes, seconds });
  }
}
