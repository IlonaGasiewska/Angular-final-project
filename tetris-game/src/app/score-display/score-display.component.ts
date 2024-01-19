import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-score-display',
  standalone: true,
  imports: [],
  templateUrl: './score-display.component.html',
  styleUrl: './score-display.component.scss'
})
export class ScoreDisplayComponent {
  @Input() userName: string = '';
  @Input() seconds: number = 0;
  @Input() minutes: number = 0;
  @Input() hours: number = 0;
  @Input() score: number = 0;
}