import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersContainerComponent } from './users-container/users-container.component';
import { RouterModule } from '@angular/router';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UsersService } from './users.service';
import { UserFormComponent } from './user-form/user-form.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserAddComponent } from './user-add/user-add.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, 
    RouterModule.forChild([])
  ],
  declarations: [UsersListComponent, UsersContainerComponent, UserDetailsComponent, UserFormComponent, UserEditComponent, UserAddComponent],
  providers: [UsersService]
})
export class UsersModule { }
