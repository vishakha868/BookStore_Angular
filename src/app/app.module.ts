import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { BooksComponent } from './books/books.component';
import { DataService } from "./data.service";
import { SinglebookComponent } from './singlebook/singlebook.component';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from "./app-routing.module";
import { BookComponent } from './book/book.component';
import { CartComponent } from './cart/cart.component';
import { OrderComponent } from './order/order.component';
import { AuthModule } from "./auth/auth.module";
import { WishlistComponent } from './wishlist/wishlist.component';
@NgModule({
  declarations:[AppComponent, BooksComponent, SinglebookComponent, BookComponent,CartComponent, OrderComponent, WishlistComponent],
  imports:[BrowserModule,FormsModule,HttpClientModule,AppRoutingModule,ReactiveFormsModule ],
  providers:[DataService],
  bootstrap:[AppComponent]
})
export class AppModule{}