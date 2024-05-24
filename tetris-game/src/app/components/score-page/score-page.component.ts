import { Component} from '@angular/core';
import { NgFor } from '@angular/common';
import { ScoreService } from '../../services/score.service';
import { IScoresListItem } from '../../services/score.service';

@Component({
  selector: 'app-score-page',
  standalone: true,
  imports: [NgFor],
  templateUrl: './score-page.component.html',
  styleUrl: './score-page.component.scss'
})
export class ScorePageComponent {
  scores: IScoresListItem[] = [];

  constructor(private _scoreService: ScoreService ) { }

// TODO Dodać sortiwanie i odświeżanie co 30 sec

  ngOnInit(): void {
    this._scoreService.getScores().subscribe(
      (data) => {
        this.scores = data});
  };
 
}