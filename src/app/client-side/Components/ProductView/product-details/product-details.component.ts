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
  Product:any={name:'Chai'};
  id:any;
  images:string[] = [];
  successMessage=false;
  ProductAmount:number=1;

  constructor(
    public cartServices:CartService,
    private router:ActivatedRoute,
    private productService:ProductStateService
    ) { }

  ngOnInit(): void {
    this.router.params.subscribe((path=>{
    this.id=path['id']
    }));

      // this.Product=this.productService.Products.filter((product:any)=>{
      // if(product.id==this.id){
      //   product.quantity=1;
      //   product.subtotal=product.price;
      //    this.images= product.images.split(',').map((image:any)=>{
      //     return "http://localhost:4000/Product/"+image
      //    })
      //   return product;
      // }
      // else return;
    // })
  }
 public addToCart(){
   this.successMessage = true;
    this.cartServices.addProductCart(this.Product)
 
  }

  AddproductAMount(){
    console.log("Add AMount");
    
 if(this.ProductAmount<10){
      this.ProductAmount++;
    }
  }
    ReduceproductAMount(){
    console.log("Reduce Amount");
      

    if(this.ProductAmount>1){
      this.ProductAmount--;
    }
  }

}
