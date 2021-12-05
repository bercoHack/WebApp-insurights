import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {LoggedInServiceService} from '../login/logged-in-service.service'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private loginservice : LoggedInServiceService) { 
  }

  ngOnInit(): void {
  }

  onClick(){
    this.loginservice.setLoggedIn();
    alert(this.loginservice.getIsLoggedIn());
  }

}
