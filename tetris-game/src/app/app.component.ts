import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamePageComponent } from './components/game-page/game-page.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { RouterOutlet, Router } from '@angular/router';
import { UserService } from './services/user.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    GamePageComponent,
    WelcomePageComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  public constructor(private _router: Router, private userService: UserService){

  }

  userName = "";
  user = { name: '', email: '' };

  handleUserData(userData: { name: string, email: string }) {
    this.user = userData;
  }

}
