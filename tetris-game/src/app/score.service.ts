import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ScoreService {
  private score = new BehaviorSubject<number>(0);

  score$ = this.score.asObservable();

  constructor() { }

  setScore(score: number): void {
    this.score.next(score);
  }

  getScore(): number {
    return this.score.value;
  }
}
