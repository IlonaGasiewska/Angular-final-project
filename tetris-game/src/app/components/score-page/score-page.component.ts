import { Component} from '@angular/core';
import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-score-page',
  standalone: true,
  imports: [NgFor],
  templateUrl: './score-page.component.html',
  styleUrl: './score-page.component.scss'
})
export class ScorePageComponent {
  html: string= '';

  constructor(private _http: HttpClient) { }

  ngOnInit(): void {
    this.fetchHTML();
  }

  fetchHTML() {
    this._http.get('https://scores.chrum.it/tetris', { responseType: 'text' }).subscribe(
      (response) => {
        this.html = response;
      },
      (error) => {
        console.error(error);
      }
    );
  }
 
}