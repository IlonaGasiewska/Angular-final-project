import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface IAction{ action: string; time: { seconds: number; minutes: number; hours: number } }


@Injectable({
  providedIn: 'root'
})
export class GameHistoryService {
  private gameHistory: IAction[] = [];
  private historySubject: BehaviorSubject<IAction[]> = new BehaviorSubject<IAction[]>([]);

  userActions$ = this.historySubject.asObservable();

  constructor() { }

  addGameAction(action: IAction): void {
    if(action.action !== 'Reset') {
      this.gameHistory.push(action);
      this.historySubject.next(this.gameHistory);
    } else{
      this.clearAction()
    }
  }

  clearAction(): void {
    this.gameHistory = [];
    this.historySubject.next(this.gameHistory);
  }
  
}
 