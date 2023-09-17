import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductStateService } from 'src/app/client-side/Services/product-state.service';

@Component({
  selector: 'app-producttype',
  templateUrl: './producttype.component.html',
  styleUrls: ['./producttype.component.css']
})
export class ProducttypeComponent implements OnInit {
  Products: any[] = [];

  //Pagination
  pagesProducts: any;
  page = 1;
  pageSize = 10;
  collectionSize = this.Products.length;
  category?: String
  type?: String
  constructor(private routerpath: ActivatedRoute, private productService: ProductStateService) {

  }

  ngOnInit(): void {
    this.routerpath.params.subscribe((path => {
      this.category = path["category"]
      this.type = path["type"]
    }));

    this.productService.getProducts().subscribe(res => {
      // if(res.type && res.category){
      // }
      this.Products = res;
    },
    )
  }

  refreshUsers() {
    this.pagesProducts = this.Products.map((user: any, i: any) => ({ _id: i + 1, ...user })).slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }


}
