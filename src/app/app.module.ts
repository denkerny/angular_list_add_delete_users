import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavigationComponent } from './navigation/navigation.component';
import { UsersModule } from './users/users.module';
import { AppRoutingModule } from './app-routing.module.';


 


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
