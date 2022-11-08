import { ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BooksComponent } from 'src/app/books/books.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let routerSpy={navigate:jasmine.createSpy('navigate')}
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports:[ReactiveFormsModule,HttpClientTestingModule,RouterTestingModule.withRoutes([
        {path:'',component:BooksComponent}
      ])],
      providers:[
        {provide:Router,useValue:routerSpy}
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    //ASSERT
    expect(component).toBeTruthy();
  });

  it("should call the function on submit",()=>{
    //ACT
    component.onsubmit();
    //ASSERT
    expect(component.bookService.isSignIn).toBeTrue();
  });

  it("should create an alert",()=>{
    //ACT
    spyOn(window,"alert");
    component.onsubmit();
    //ASSERT
    expect(window.alert).toHaveBeenCalledWith("Successfully Login !");
  });

  it("should navigate to home page",()=>{
    //ACT
    component.onsubmit();
    //ASSERT
    expect(routerSpy.navigate).toHaveBeenCalledWith([`/`]);
  });
});
