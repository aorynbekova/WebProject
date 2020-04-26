import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

import {User} from '../user';
import {UserService} from '../user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private location: Location,
    ) { }

  ngOnInit(): void {
  }
  submit():void{
    
  }

  goBack(): void {
    this.location.back();
  }
}
