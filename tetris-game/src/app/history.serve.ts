import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

interface action { action: string; time: { seconds: number; minutes: number; hours: number } }


@Injectable({
  providedIn: 'root'
})
export class GameHistoryService {
  private gameHistory: action[] = [];
  private historySubject: BehaviorSubject<action[]> = new BehaviorSubject<action[]>([]);

  userActions$ = this.historySubject.asObservable();

  constructor() { }

  addGameAction(action: action): void {
    this.gameHistory.push(action);
    this.historySubject.next(this.gameHistory);
  }

  getGameHistory(): Observable<action[]> {
    return this.historySubject.asObservable();
  }
}
 