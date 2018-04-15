import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { UsersService } from './users.service';
import { AddUserComponent } from './add-user/add-user.component';
 


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DetailsComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
