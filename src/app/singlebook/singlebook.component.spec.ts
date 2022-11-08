import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SinglebookComponent } from './singlebook.component';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { BooksComponent } from '../books/books.component';

describe('SinglebookComponent', () => {
  let component: SinglebookComponent;
  let fixture: ComponentFixture<SinglebookComponent>;
  let routerSpy = { navigate: jasmine.createSpy('navigate') };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SinglebookComponent],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([
          { path: '', component: BooksComponent }
        ])
      ],
      providers: [{ provide: Router, useValue: routerSpy }]
    }).compileComponents();
    fixture = TestBed.createComponent(SinglebookComponent);
    component = fixture.componentInstance;
    component.book = {
      title: 'Practical MongoDB',
      subtitle: 'Architecting, Developing, and Administering MongoDB',
      isbn13: '9881919199',
      price: '$41.57',
      image: 'https://itbook.store/img/books/9781484206485.png',
      url: 'https://itbook.store/books/9781484206485'
    };
    fixture.detectChanges();
  });

  it('should create component', () => {
    //ACT
    fixture.detectChanges();
    //ASSERT
    expect(component).toBeTruthy();
  });

  ////////////////////////////Add cart////////////////////////
  it('should call alert for adding book to cart', () => {
    //ARRANGE
    component.bookService.isSignIn = true;
    //ACT
    spyOn(window, 'alert');
    component.AddCart(component.book);
    //ASSERT
    expect(component.bookService.cart.length).toEqual(1);
    expect(window.alert).toHaveBeenCalledWith('Added to Cart');
  });

  it('should route to home while adding to cart', () => {
    // ARRANGE
    component.bookService.isSignIn = false;
    //ACT
    component.AddCart(component.book);
    //ASSERT
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/register']);
  });

  ////////////////////////////Add Wishlist//////////////
  it('should call alert for adding book to wishlist', () => {
    //ARRANGE
    spyOn(window, 'alert');
    component.bookService.isSignIn = true;
    //ACT
    component.AddWishlist(component.book);
    //ASSERT
    expect(component.bookService.wishlist.length).toEqual(1);
    expect(window.alert).toHaveBeenCalledWith('Added to Wishlist');
  });

  it('should route to home while adding to wishlist', () => {
    //ARRANGE
    component.bookService.isSignIn = false;
    //ACT
    component.AddWishlist(component.book);
    //ASSERT
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/register']);
  });

  it('should route to detailed page for the book', () => {
    //ACT
    component.DetailedPage(component.book);
    //ASSERT
    expect(routerSpy.navigate).toHaveBeenCalledWith([
      `/book/:${component.book.isbn13}`
    ]);
  });
});
