import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-welcome-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './welcome-page.component.html',
  styleUrl: './welcome-page.component.scss'
})
export class WelcomePageComponent {
  name= "";
  title = 'ngTETRIS GAME';
  email = "";
  isButtonDisabled = true;
  errorMessage = "";
  
  checkInputs() {

  }
}
