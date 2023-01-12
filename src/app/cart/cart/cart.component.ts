import { Component, OnInit } from '@angular/core';

import { CartService } from '../cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  // products

  constructor(public cartservice: CartService) { }

  ngOnInit(): void {

  }

  // cart status
  public isCartEmpty(): boolean {
    return !this.cartservice.products.length;
  }
  logedin() {
    if (localStorage.getItem("vega") == null) {
      return false;
    }
    return true;
  }
}
