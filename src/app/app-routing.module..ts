
import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';


import { NotFoundComponent } from './not-found/not-found.component';
import { UsersModule } from './users/users.module';
import { UsersListComponent } from './users/users-list/users-list.component';
import { UsersContainerComponent } from './users/users-container/users-container.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { UserAddComponent } from './users/user-add/user-add.component';


 
const routes: Route[] = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: 'users', component: UsersContainerComponent, children: [
    { path: '', redirectTo: 'list', pathMatch: 'full' }, 
    { path: 'add', component: UserAddComponent},
    { path: 'edit/:id', component: UserEditComponent },
    { path: 'list', component: UsersListComponent }, 
    { path: 'list/:id', component: UserDetailsComponent }
  ] },
  { path: '**', component: NotFoundComponent }
]

@NgModule({

  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
