import { Component} from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router'
import { NgClass } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-welcome-page',
  standalone: true,
  imports: [NgClass, ReactiveFormsModule],
  templateUrl: './welcome-page.component.html',
  styleUrl: './welcome-page.component.scss'
})
export class WelcomePageComponent {
  selectedTheme:string= "light"
  name: string = "";
  title:string = 'ngTETRIS GAME';
  token: string  = "";
  isButtonDisabled = true;
  errorMessage: string = "";

  
  public userForm = this.fb.group({
    name: ['', [
      Validators.required,
      Validators.min(5)
    ]],
    token: ['', [
      Validators.required,
      Validators.min(5)
    ]],
    selectedTheme: ['light', []],
  });

  constructor(public userService : UserService, private _router: Router, public fb: FormBuilder ) {
    // this.userForm.get(['userForm', 'name'])!.valueChanges.subscribe((name) => {
    //   if (!name) {
    //     this.errorMessage = "Name and token are required";
    //   }
    // });
  }

  handleInputsValidation () {
    if (this.name === "" && this.token === "") {
      
      this.isButtonDisabled = true;
    } else if (this.name === "") {
      this.errorMessage = "Name is required";
      this.isButtonDisabled = true;
    } else if (this.token === "") {
      this.errorMessage = "Token is required";
      this.isButtonDisabled = true;
    } else {
      this.errorMessage = "";
      this.isButtonDisabled = false;
    }
  }

  submit() {
    if (this.name && this.token) {
      this.checkToken();
    };
  };
  
  checkToken() {
    this.userService.checkToken(this.token).subscribe((response: any) => {
      if (response.success) {
        this.userService.setUserData( this.name,  this.token );
        this.goToGamePage();

      } else {
        this.errorMessage = "Invalid token";
        this.isButtonDisabled = true;
      };
    });
  }

  goToGamePage(){
    this._router.navigate(['/game/', this.selectedTheme]);
  }

  goToScorePage(){
    this._router.navigate(['/scores']);
  }
}
