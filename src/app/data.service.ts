import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { IBook } from './book';

@Injectable({
  providedIn: 'root'
})
export class DataService {
   cart:any=[];
   isHome:boolean=true;
   checkout:any=[];
   wishlist:any=[];
   orders:any=[];
   isSignIn:boolean=false;
   signIn:any={};
  constructor(private http:HttpClient) { }
  public getbooks():Observable<IBook>{
    return this.http.get<IBook>("https://api.itbook.store/1.0/search/mongodb?page=1");
}
}
