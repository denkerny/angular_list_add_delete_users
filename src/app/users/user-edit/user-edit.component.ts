import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { User } from '../models/User';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  user: User
  constructor(private usersService: UsersService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.switchMap((params: ParamMap) => {
      const id = +params.get('id')
      return this.usersService.get(id)
    }).subscribe((user: User) => this.user = user);
  }

  onFormSave(user){
    console.log(user);
    this.usersService.update(user).subscribe(() => this.goToUsersList());
  }

  onFormCancel(){
    this.goToUsersList();
  }

  goToUsersList(){
    this.router.navigate(['../../', 'list'], { relativeTo: this.route })
  }
}
