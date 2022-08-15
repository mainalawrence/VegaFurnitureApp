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
  constructor(public cartService:CartService) { }

  ngOnInit(): void {
  }
  HandleHeart(){
    
  }
  addToCart(){   
    this.cartService.addProductCart(this.product);
  }

}
