import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DataService } from '../data.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CartComponent } from './cart.component';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartComponent ],
      imports:[HttpClientTestingModule],
      providers:[DataService],
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    //ASSERT
    expect(component).toBeTruthy();
  });
  it("should call the checkout function",()=>{
    //ARRANGE
    component.cart=
      [{
        "title": "Practical MongoDB",
        "subtitle": "Architecting, Developing, and Administering MongoDB",
        "isbn13": "9871654432",
        "price": "$41.57",
        "image": "https://itbook.store/img/books/9781484206485.png",
        "url": "https://itbook.store/books/9781484206485"
        }];
    component.cart=component.bookService.cart;
    //ACT
    component.checkoutOrder(component.cart)
    //ASSERT
    expect(component.bookService.checkout).toEqual(component.cart);
    expect(component.bookService.cart.length).toBe(0);
    expect(component.cart.length).toBe(0);

  })
  
  it("should call the alert on checkout function",()=>{
    //ACT
    spyOn(window,"alert");
    component.checkoutOrder(component.cart)
    //ASSERT
    expect(window.alert).toHaveBeenCalledWith("Purchase Completed");
  })
});
