import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { AppRoutingModule } from './app-routing.module';
import { TodoComponent } from './todo/todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
// import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from "./home/home.component";

import { UserlistComponent } from './userlist/userlist.component';
import { MeetupsComponent } from './meetups/meetups.component';
import { MeetupComponent } from './meetup/meetup.component';
import { HeaderComponent } from './modules/header/header.component';
import { MeetupDetailComponent } from './meetup-detail/meetup-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoListComponent,
    MainNavComponent,
    LoginComponent,
    UserlistComponent,
    MeetupsComponent,
    MeetupComponent,
    HomeComponent,
    HeaderComponent,
    MeetupDetailComponent
  ],
  imports: [
    HeaderModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
