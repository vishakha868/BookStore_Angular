import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {FormsModule,ReactiveFormsModule,Validators} from '@angular/forms';
import { AppRoutingModule } from "../app-routing.module";



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
 AppRoutingModule,
  ReactiveFormsModule,
  ]
})
export class AuthModule { }
