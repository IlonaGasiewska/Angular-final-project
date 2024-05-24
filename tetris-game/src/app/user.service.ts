import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private userData: { name: string, email: string } = { name: '', email: '' };

  constructor() { }

  setUserData(name: string, email: string) {
    this.userData = { name: name, email: email };
  }

  getUserData() {
    return this.userData;
  }
}
