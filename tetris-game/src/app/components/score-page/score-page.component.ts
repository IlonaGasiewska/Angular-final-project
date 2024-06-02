import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ScoreService, IScoresListItem } from '../../services/score.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-score-page',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor, NgClass],
  templateUrl: './score-page.component.html',
  styleUrls: ['./score-page.component.scss']
})
export class ScorePageComponent implements OnInit {
  scores: IScoresListItem[] = [];
  sortForm: FormGroup;
  selectedTheme:string='';

  constructor(
    private _scoreService: ScoreService,
    private _router: Router,
    private _route: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.sortForm = this.fb.group({
      sortOrder: ['desc']
    });
  }

  ngOnInit(): void {

     this._scoreService.scores$.subscribe(
      (data) => {
        this.scores = this.sortScores(data, this.sortForm.get('sortOrder')?.value);
      }
    );

    this._route.params.subscribe((params: { [key: string]: string }) => {
      this.selectedTheme = params['theme']; 
    });

    this.sortForm.get('sortOrder')?.valueChanges.subscribe(order => {
      this.scores = this.sortScores(this.scores, order);
    });
  }

  sortScores(data: IScoresListItem[], order: 'asc' | 'desc'): IScoresListItem[] {
    data = data.sort((a, b) => b.score - a.score).slice(0,10);
    return data.sort((a, b) => order === 'asc' ? a.score - b.score : b.score - a.score);
  }

  changePage(): void {
    this._router.navigate(['/welcome']);
  }
}
