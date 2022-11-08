import { Component, OnInit } from '@angular/core';
import { Books } from '../book';
import { DataService } from '../data.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  constructor(public bookService: DataService) {}
  cart: Array<Books> = [];

  ngOnInit(): void {
    this.cart = this.bookService.cart;
  }

  checkoutOrder(cart: Array<Books>): void {
    this.bookService.checkout = cart;
    this.bookService.cart = [];
    this.cart = [];
    alert('Purchase Completed');
  }
}
