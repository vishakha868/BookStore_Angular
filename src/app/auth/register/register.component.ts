import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 
  customerRegister!:FormGroup;
 
  constructor(private fb:FormBuilder,private router:Router,private bookService:DataService) { }
  
  ngOnInit(){
    this.customerRegister=this.fb.group({
      firstName:['',[Validators.required,Validators.minLength(2),Validators.maxLength(26)]],
      lastName:['',[Validators.required,Validators.minLength(2),Validators.maxLength(26)]],
      password:['',[Validators.required,Validators.minLength(6),Validators.maxLength(6)]],
      confirmPassword:['',[Validators.required,Validators.minLength(6),Validators.maxLength(6)]],
      phone:[null,Validators.compose([Validators.required,Validators.max(999999),Validators.min(0)])],
    })
  }

  get firstName(): FormControl<string>{
   return this.customerRegister.get('firstName') as FormControl;
  }

  get lastName():FormControl<string>{
    return this.customerRegister.get('lastName') as FormControl;
  }
  get phone():FormControl<number>{
    return this.customerRegister.get('phone') as FormControl;
  }

  get password():FormControl<string>{
    return this.customerRegister.get('password') as FormControl;
  }

  get confPassword():FormControl<string>{
    return this.customerRegister.get('confirmPassword') as FormControl;
  }
  RouteToLogin(): void{
    this.router.navigate(['/login']);
  }

  onsubmit(): void{
    this.bookService.isSignIn=true;
    this.bookService.signIn=this.customerRegister.value;
    alert("registration successfull");
    this.router.navigate(['/']);
  }
  

}
