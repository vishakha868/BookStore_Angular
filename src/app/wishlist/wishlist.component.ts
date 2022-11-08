import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Books } from '../book';
import { DataService } from '../data.service';
@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  wishlist: Array<Books> = [];
  isWishlist!: boolean;
  constructor(public bookService: DataService, private router: Router) {
    this.wishlist = this.bookService.wishlist;
    if (this.wishlist.length != 0) this.isWishlist = true;
  }

  ngOnInit(): void {
    // TODO document why this method 'ngOnInit' is empty
  }

  AddCart(book: Books) {
    this.bookService.cart.push(book);
    this.wishlist = this.bookService.wishlist = this.bookService.wishlist.filter(
      (x: Books) => x.title != book.title
    );
    alert('Added to Cart');
  }
}
