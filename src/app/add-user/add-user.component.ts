import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { User } from '../models/User';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  @Input('anotherUser') user: User
  @Output() addBtn = new EventEmitter<User>()

  constructor() { }

  ngOnInit() {
  }

  addBtnClick(){
    this.addBtn.emit(this.user);
  }

}
