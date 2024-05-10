import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ScoreService {
  public score = new BehaviorSubject<number>(0);
  public html:string =''

  score$ = this.score.asObservable();

  constructor(private _http: HttpClient) {
 
  }

  setScore(score: number): void {
    this.score.next(score);
  }

  getScore(): number {
    return this.score.value;
  }

  getScores(){
    this._http.get('https://scores.chrum.it/tetris', { responseType: 'text' }).subscribe(
      (response) => {
        this.html = response;
        return this.html;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
