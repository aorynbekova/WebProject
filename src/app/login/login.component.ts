import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {FormBuilder, FormGroup} from '@angular/forms';
import {User} from '../user';
import {UserService} from '../user.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login = {
    email: '',
    password: ''
  }
  
  constructor(
    private userService: UserService,
    private location: Location,
  ) { }

  ngOnInit(): void {
  }


  /*onLogin(): void {
    this.userService.Login(this.login);
  }*/

  goBack(): void {
    this.location.back();
  }
}
