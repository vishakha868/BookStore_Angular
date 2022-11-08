import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule,HttpTestingController } from '@angular/common/http/testing';
import { DataService } from './data.service';
import { IBook } from './book';
import { SinglebookComponent } from './singlebook/singlebook.component';
import { CartComponent } from './cart/cart.component';

describe('DataService', () => {
  let service: DataService;
  let httpTestingController!:HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[DataService],
      declarations:[SinglebookComponent,CartComponent]
    });
    httpTestingController=TestBed.inject(HttpTestingController);
    service = TestBed.inject(DataService); 
   
  });
  afterEach(()=>{
    httpTestingController.verify();
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('#getBook should return expected data',(done)=>{
    const expectedData:IBook={
      books:[
        {"title":"MongoDB",
        "subtitle":"Architecting, Developing, and Administering MongoDB",
        "isbn13":"9781484206485",
        "price":"$41.57",
        "image":"https://itbook.store/img/books/9781484206485.png",
        "url":"https://itbook.store/books/9781484206485"}
  ]};
    service.getbooks().subscribe(data=>{
      // console.log(data.books)
      expect(data).toEqual(expectedData);
      done();
    });
    const testRequest=httpTestingController.expectOne('https://api.itbook.store/1.0/search/mongodb?page=1');
    testRequest.flush(expectedData);
  });
});
