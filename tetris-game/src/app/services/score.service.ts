import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, Observable, map } from 'rxjs';

export interface IScoresListItem{
  name:"string",
  score:"number"
}

@Injectable({
  providedIn: 'root'
})

export class ScoreService {
  public score = new BehaviorSubject<number>(0);
  private _URL = 'https://scores.chrum.it/scores/tetris';
  private _POST_SCORE_URL = 'https://scores.chrum.it/scores';
  public score$ = this.score.asObservable();

  constructor(private _http: HttpClient) {}

  public setScore(score: number): void {
    this.score.next(score);
  };

  public getScore(): number {
    return this.score.value;
  };

  public postScore (userData:{name:string, score:number, token: string}) {
    const dataTosend = {
      name: userData.name,
      game: "tetris",
      score: userData.score
    };
    
    return this._http.post(this._POST_SCORE_URL, dataTosend, {
      headers: {  Accept: 'application/json', 'Auth-Token': userData.token , 'Content-Type': 'application/json'}
    });

  };

  public getScores(): Observable<IScoresListItem[]> {
    return this._http
      .get<Array<IScoresListItem>>(this._URL, {
        headers: { Accept: 'application/json' },
      });
    };
};
