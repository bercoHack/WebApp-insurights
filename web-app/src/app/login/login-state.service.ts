import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { movie } from '../movielist/movie';
import { HttpErrorHandler, HandleError } from '../http-error-handler.service';

const httpOptions = {
  headers: new HttpHeaders({
  'Content-Type':  'application/json',
  Authorization: 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class LoginStateService {
  loginUrl = 'http://localhost:5002/api/movies';  

  constructor(private http: HttpClient) {
  }

  /** GET movies from the server */
  getLogin(): boolean{
    return null;
  }
}
