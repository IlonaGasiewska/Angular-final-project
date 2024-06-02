import { NgForOf } from '@angular/common';
import { Component} from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { GameHistorySortPipe } from './game-history-sort.pipe';
import { GameHistoryService } from '../../services/gameHistory.service';
import { Subscription } from 'rxjs';

interface Action{ 
  action: string; 
  time: { 
    seconds: number; 
    minutes: number; 
    hours: number 
  } 
}

@Component({
  selector: 'app-user-action-history',
  standalone: true,
  imports: [NgForOf, ReactiveFormsModule],
  templateUrl: './user-action-history.component.html',
  styleUrl: './user-action-history.component.scss'
})
export class UserActionHistoryComponent {
  actions: Action[] = [];
  private actionsSubscription!: Subscription;

  constructor(private _gameHistoryService: GameHistoryService, private fb: FormBuilder) {}
 
  userActionForm = this.fb.group({
    selectedAction: ['All'],
    selectedSorting: ['First']
  });

  
  ngOnInit(): void {
    this.actionsSubscription = this._gameHistoryService.userActions$.subscribe(
      actions => {
        this.actions = actions;
      }
    );
  }

  ngOnDestroy(): void {
    this.actionsSubscription.unsubscribe();
  }


 get filteredActions() {
   let filtered = this.actions;

   if (this.userActionForm.value.selectedAction! !== 'All') {
     filtered = filtered.filter((e) => e.action.includes(this.userActionForm.value.selectedAction!));
   }

   return new GameHistorySortPipe().transform(filtered, this.userActionForm.value.selectedSorting!);
 }
  
}