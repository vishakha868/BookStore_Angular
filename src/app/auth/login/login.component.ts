import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!:FormGroup;
  constructor(public bookService:DataService,private router:Router) { }

  ngOnInit(): void {
    this.loginForm=new FormGroup({
      email:new FormControl('',Validators.email),
      password:new FormControl('',[Validators.maxLength(6),Validators.minLength(6)])
    });
  }

  get email(){
    return this.loginForm.get('email') as FormControl;
  }

  get password(){
    return this.loginForm.get('password') as FormControl;
  }
  
  onsubmit(): void{
    this.bookService.isSignIn=true;
    this.bookService.signIn=this.loginForm.value;
    alert("Successfully Login !");
    this.router.navigate(['/']);
  }

}
