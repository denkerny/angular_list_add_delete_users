import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';
import { UsersService } from '../users.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
  user: User
  constructor(private usersService: UsersService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.user = new User();
  }

  onFormSave(user){
    console.log(user);
    this.user = user;
    this.usersService.add(user).subscribe(() => this.goToUsersList());
  }

  onFormCancel(){
    this.goToUsersList();
  }

  goToUsersList(){
    this.router.navigate(['../', 'list'], { relativeTo: this.route })
  }

}
