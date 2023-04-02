import { Component, OnInit } from '@angular/core';
import { ProductStateService } from 'src/app/client-side/Services/product-state.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  Products: any[] = [];

  //Pagination
  pagesProducts: any;
  page = 1;
  pageSize = 10;
  collectionSize = this.Products.length;

  constructor(private productService: ProductStateService) { }

  ngOnInit(): void {

    this.productService.getProducts().subscribe(res => {
      this.Products = res;
    },
    )
  }
  
  refreshUsers() {
    this.pagesProducts = this.Products.map((user: any, i: any) => ({ _id: i + 1, ...user })).slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

}
