import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../models/User';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() list: User[]
  @Output() select = new EventEmitter<User>()

  constructor() { }

  ngOnInit() {
  }

  onRowClick(user: User){
    this.select.emit(user);
    console.log(user);
  }
}
