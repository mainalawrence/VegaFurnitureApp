import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  Products:any[]=[1,2,2,2,3,4,2,3,2,2,2,2,2,2,2,2,2,2,2,2,2,4]
  
  //Pagination
  pagesProducts:any;
  page = 1;
  pageSize =10;
  collectionSize = this.Products.length;
  
  constructor() { }

  ngOnInit(): void {

  }
    refreshUsers() {
    this.pagesProducts =this.Products.map((user:any,i:any)=> ({_id: i + 1, ...user})).slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

}
