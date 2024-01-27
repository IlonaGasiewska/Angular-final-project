import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-welcome-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './welcome-page.component.html',
  styleUrl: './welcome-page.component.scss'
})
export class WelcomePageComponent {
  name = "";
  title = 'ngTETRIS GAME';
  email = "";
  isButtonDisabled = true;
  errorMessage = "";
  emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

  checkInputs () {
    if (this.name === "" && this.email === "") {
      this.errorMessage = "Name and email are required";
    } else if (this.name === "") {
      this.errorMessage = "Name is required";
    } else if (this.email === "") {
      this.errorMessage = "Email is required";
    } else if (!this.emailPattern.test(this.email)) {
      this.errorMessage = "Email is invalid";
    } else {
      this.errorMessage = "";
      this.isButtonDisabled = false;
    }
  }

  @Output() userDataSubmitted: EventEmitter<{ name: string, email: string }> = new EventEmitter();

  submit() {
    if (this.name && this.email) {
      this.userDataSubmitted.emit({ name: this.name, email: this.email });
    }
  }

  @Input() welcomePageShouldBeVisible: boolean = false;
  @Output() pageChange = new EventEmitter<void>();

  changePage() {
    this.pageChange.emit();
  }
}
