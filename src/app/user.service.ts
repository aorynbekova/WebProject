import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {User, USER} from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _url = 'http://localhost:8000/api/user/'
  httpHeaders = { headers: new HttpHeaders({ 'Content-Type': 'application/json'})}
  constructor(private http: HttpClient) { }

  Login(user: User): Observable<User> {
    return this.http.post<User>(this._url + 'login', user, this.httpHeaders)
  }

  SignUp(user: User): Observable<User> {
    return this.http.post<User>(this._url + 'register', user, this.httpHeaders)
  }
}
