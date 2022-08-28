import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/adminModule/Services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  Products:any[]=[]
  pagesProducts:any;
  page = 1;
  pageSize =10;
  collectionSize = this.Products.length;
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(res=>{
      this.Products=res
    })
    this.collectionSize = this.Products.length;
    this.refreshUsers();
  }


  refreshUsers() {
    this.pagesProducts =this.Products.map((user:any,i:any)=> ({_id: i + 1, ...user})).slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }


  updateProduct(id:string){
   console.log(this.Products.filter((user:any)=>{
     if(user.id===id) return user;
     return;
   })[0]);
   
    
  }
  deleteProduct(id:string){
    this.productService.trushedProduct(id).subscribe((res)=>{
      console.log(res);
    })

  }

}
