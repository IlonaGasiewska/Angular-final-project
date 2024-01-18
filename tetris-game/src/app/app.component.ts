import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamePageComponent } from './game-page/game-page.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    GamePageComponent,
    WelcomePageComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  welcomePageShouldbeVivible = true!;
  userName = "";
  user = { name: '', email: '' };

  handleUserData(userData: { name: string, email: string }) {
    this.user = userData;
  }

  changePage() {
    this.welcomePageShouldbeVivible = !this.welcomePageShouldbeVivible;
  }
}
