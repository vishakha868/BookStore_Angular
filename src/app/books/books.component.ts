import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  constructor(private bookData: DataService, private router: Router) {}
  books: any = [];
  
  ngOnInit(): void {
    this.bookData.getbooks().subscribe(data => (this.books = data.books));
  }
}
