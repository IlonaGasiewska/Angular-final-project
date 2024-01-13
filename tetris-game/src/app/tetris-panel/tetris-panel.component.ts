import { Component, NgModule } from '@angular/core';
import { TetrisCoreComponent, TetrisCoreModule } from 'ngx-tetris';

@Component({
  selector: 'app-tetris-panel',
  standalone: true,
  imports: [TetrisCoreModule],
  templateUrl: './tetris-panel.component.html',
  styleUrl: './tetris-panel.component.scss'
})


export class TetrisPanelComponent {

}
