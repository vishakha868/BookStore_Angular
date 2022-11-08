import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Books } from '../book';
import { DataService } from '../data.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  singleBookData!:Books;
  constructor(private ActivateRoutes:ActivatedRoute,private bookService:DataService, private router:Router) { }
  isbn13!:string;
  ngOnInit(): void {
     let isbn13=this.ActivateRoutes.snapshot.params['isbn13']
     this.ActivateRoutes.params.subscribe(params=>{
      this.isbn13=params['isbn13'];
      console.log(this.isbn13);
     })
     const isbn_split=isbn13.split(':')
     this.bookService.getbooks().subscribe(data=>data.books.filter(book=>{
      if(book.isbn13==isbn_split[1])
        this.singleBookData=book;
     }))
  }

  AddToCart(singleBookData:Books):void{
    if (!this.bookService.isSignIn) {
      this.router.navigate(['/register']);
    } else {
      this.bookService.cart.push(singleBookData);
      alert('Added to Cart');
      this.router.navigate(['/']);
    }
  }

}
