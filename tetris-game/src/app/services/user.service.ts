import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  public userData: { name: string, token: string } = { name: '', token: '' };

  constructor() { }

  isAuthenticated(){
    if (this.userData.name !="" && this.userData.token !==""){
      return true;
    } else {
      return false;
    }
  }

  setUserData(name: string, token: string) {
    this.userData = { name: name, token: token };
  }

  getUserData() {
    return this.userData;
  }

  checkToken(){
    
  }
}
