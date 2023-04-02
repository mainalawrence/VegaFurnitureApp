import { Component, OnInit, ViewChild } from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';
import { ActivatedRoute } from '@angular/router';
import { ProductStateService } from 'src/app/client-side/Services/product-state.service';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  staticAlertClosed = false;

  Product: any = { name: 'Chai' };
  id: any;
  images: string[] = [];
  ProductAmount: number = 1;
  mainImageURL: string = '';

  @ViewChild('staticAlert', { static: false })
  staticAlert!: NgbAlert;
  constructor(
    public cartServices: CartService,
    private router: ActivatedRoute,
    private productService: ProductStateService
  ) { }

  ngOnInit(): void {
    this.router.params.subscribe((path => {
      this.id = path['id']

    }));
    this.productService.getProduct(this.id).subscribe(res => {
      res[0].quantity = 1;
      res[0].subtotal = res[0].cost;


      this.Product = res[0];
      this.images = res[0].pictures.map((image: any) => {
        return "http://localhost:4000/Product/" + image
      })
      this.mainImageURL = this.images[0];

    })

    this.Product = this.productService.Products.filter((product: any) => {
      console.log(product);

      if (product.uid == this.id) {
        product.quantity = 1;
        product.subtotal = product.price;
        this.images = product.pictures.map((image: any) => {
          return "http://localhost:4000/Product/" + image
        })
        return product;
      }
      else return;
    })
    setTimeout(() => this.staticAlert.close(), 20000);
  }

  public addToCart() {
    this.staticAlertClosed = true;
    this.cartServices.addProductCart(this.Product)
  }

  AddproductAMount() {
    console.log("Add AMount");

    if (this.ProductAmount < 10) {
      this.ProductAmount++;
    }
  }

  ReduceproductAMount() {
    console.log("Reduce Amount");


    if (this.ProductAmount > 1) {
      this.ProductAmount--;
    }
  }

}
