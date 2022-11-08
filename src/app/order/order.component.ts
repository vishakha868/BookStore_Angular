import { Component, OnInit } from '@angular/core';
import { Books } from '../book';
import { DataService } from '../data.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
orders:Array<Books>=[];
isOrder!:boolean;
  constructor(private bookService:DataService) { }

  ngOnInit(): void {
    this.orders=this.bookService.checkout;
    if(this.orders.length!=0)
       this.isOrder=true;
  }

}
