import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {User, USER} from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  getUserByUsername(username: string): Observable<User>{
    return of(USER.find(user => user.username === username));
  }

  getUsers(): Observable<User[]>{
    return of(USER);
  }

  constructor() { }
}
