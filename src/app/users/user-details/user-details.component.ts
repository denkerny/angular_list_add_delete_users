import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/User';
import { ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { UsersService } from '../users.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit, OnDestroy {
  user: User
  subscription: Subscription
  constructor(private route: ActivatedRoute, private usersService: UsersService) { }

  ngOnInit() {
    this.subscription = this.route.paramMap.switchMap((params: ParamMap) => {
      const id = Number(params.get('id'))
      return this.usersService.get(id);
    }).subscribe((user: User) => this.user = user)
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
