import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Books } from '../book';
import { DataService } from '../data.service';

@Component({
  selector: 'app-singlebook',
  templateUrl: './singlebook.component.html',
  styleUrls: ['./singlebook.component.css']
})
export class SinglebookComponent {
  @Input() public book!: Books;
  isHome!: boolean;
  constructor(public bookService: DataService, private router: Router) {}

  AddCart(book: Books): void {
    if (!this.bookService.isSignIn) {
      this.router.navigate(['/register']);
    } else {
      this.bookService.cart.push(book);
      alert('Added to Cart');
    }
  }

  AddWishlist(book: Books): void {
    if (!this.bookService.isSignIn) this.router.navigate(['/register']);
    else {
      this.bookService.wishlist.push(book);
      alert('Added to Wishlist');
    }
  }

  DetailedPage(book: Books): void {
    this.router.navigate([`/book/:${book.isbn13}`]);
  }
}
