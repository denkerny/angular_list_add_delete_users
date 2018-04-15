import { Injectable } from '@angular/core';
import { USERS } from './users-mock';
import { User } from './models/User';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { randomUser } from './random-user';


@Injectable()
export class UsersService {
  users: User[] = USERS
  anotherUser: User = randomUser

  constructor() { }

  getList():Observable<User[]>{
    return of(this.users)
  }


  getAnotherUser():Observable<User>{
    return of(this.anotherUser)
  }


  deleteUser(user: User):Observable<void>{
    this.users = this.users.filter(u => u !== user);
    return of(null)
  }

  addUser(user: User):Observable<User[]>{
    console.log(user);
    this.users.push(user);
    return of(this.users)
  }
}
