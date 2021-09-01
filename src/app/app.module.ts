import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponent } from './common/input/input.component';
import { ButtonComponent } from './common/button/button/button.component';
import { LoginComponent } from './pages/login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { LogoComponent } from './common/logo/logo.component';
import { ForgetPasswordComponent } from './pages/forget-password/forget-password.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UserListComponent } from './common/user-list/user-list.component';
import { HttpClientModule } from "@angular/common/http";
import { DetailComponent } from './pages/detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    ButtonComponent,
    LoginComponent,
    LogoComponent,
    ForgetPasswordComponent,
    DashboardComponent,
    UserListComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
