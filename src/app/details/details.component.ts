import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../models/User';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Input() user: User
  @Output() delete = new EventEmitter<User>()

  constructor() { }

  ngOnInit() {
  }

  onDeleteBtnClick(){
    this.delete.emit(this.user)
  }
}
