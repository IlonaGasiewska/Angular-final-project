import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router'
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-welcome-page',
  standalone: true,
  imports: [FormsModule, NgClass],
  templateUrl: './welcome-page.component.html',
  styleUrl: './welcome-page.component.scss'
})
export class WelcomePageComponent {
  selectedTheme:string= ""

  constructor(public userService : UserService, private _router: Router ) {
    this.selectedTheme = 'light';
  }

  name: string = "";
  title:string = 'ngTETRIS GAME';
  token: string  = "";
  isButtonDisabled = true;
  errorMessage: string = "";

  handleInputsValidation () {
    if (this.name === "" && this.token === "") {
      this.errorMessage = "Name and token are required";
    } else if (this.name === "") {
      this.errorMessage = "Name is required";
    } else if (this.token === "") {
      this.errorMessage = "Token is required";
    } else {
      this.errorMessage = "";
      this.isButtonDisabled = false;
    }
  }

  submit() {
    if (this.name && this.token) {
      this.userService.setUserData( this.name,  this.token );
      this.checkToken();
      this.goToGamePage();
    }
  }

  checkToken(){

  }

  goToGamePage(){
    this._router.navigate(['/game/', this.selectedTheme]);
  }

  goToScorePage(){
    this._router.navigate(['/scores']);
  }
}
