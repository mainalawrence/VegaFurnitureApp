import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';
import { ActivatedRoute } from '@angular/router';
import { ProductStateService } from 'src/app/client-side/Services/product-state.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  Products:any;
  id:any;
  images:string[] = []
  constructor(
    public cartServices:CartService,
    private router:ActivatedRoute,
    private productService:ProductStateService
    ) { }

  ngOnInit(): void {
    this.router.params.subscribe((path=>{
    this.id=path['id']
    }));

      this.Products=this.productService.Products.filter((product:any)=>{
      if(product.id==this.id){
        product.quantity=1;
        product.subtotal=product.price;
         this.images= product.images.split(',').map((image:any)=>{
          return "http://localhost:4000/Product/"+image
         })
        return product;
      }
      else return;
    })
    console.log(this.Products);
  }

}
