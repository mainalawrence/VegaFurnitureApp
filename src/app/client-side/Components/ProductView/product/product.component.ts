import { Component, OnInit,Input } from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product:any={};
  private hearts:number=0;
  images: String[] = [];
  url: string = '';
  constructor(public cartService:CartService) { }

  ngOnInit(): void {
    this.url = "http://localhost:4000/Product/"+this.product.pictures[0]
  }
  HandleHeart(){
    
  }
  addToCart(){   
    this.cartService.addProductCart(this.product);
  }

}
