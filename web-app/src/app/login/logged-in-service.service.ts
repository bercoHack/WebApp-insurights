import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoggedInServiceService {
  private isLoggedIn: boolean;
  constructor() { 
    this.isLoggedIn = false;
    alert("new instanse")
  }

  getIsLoggedIn() : boolean{
    return this.isLoggedIn;
  }

  setLoggedIn(){
    this.isLoggedIn = true;
  }
}
