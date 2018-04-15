import { Component, OnInit } from '@angular/core';
import { User } from './models/User';

import { UsersService } from './users.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  users$: Observable<User[]> 
  currentUser: User
  anotherUser$: Observable<User>



  constructor(private usersService: UsersService){
    
  }

  ngOnInit(){
    this.getUsers();
    this.getUser();
  }

  getUsers(){
    this.users$ = this.usersService.getList();
  }

  getUser(){
    this.anotherUser$ = this.usersService.getAnotherUser();
  }

  onSelect(user: User){
    this.currentUser = user;
  }

  onDeleteUser(user: User){
    this.users$ = this.usersService
      .deleteUser(user)
      .switchMap(() => this.usersService.getList());
    this.currentUser = null; 
  }

  onAddUser(user: User){
    this.users$ = this.usersService.addUser(user);
  }
}
