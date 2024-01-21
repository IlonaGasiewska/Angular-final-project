import { NgForOf } from '@angular/common';
import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-user-action-history',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './user-action-history.component.html',
  styleUrl: './user-action-history.component.scss'
})
export class UserActionHistoryComponent {
  gameHistory = ["button left", "button right"]
}
