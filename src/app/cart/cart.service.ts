import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CartService {
  Total: number = 0;
  products: any[] = []

  constructor(private http: HttpClient,) {
    this.TotolPrice()
  }
  productCount() {
    return this.products.length;
  }

  addProductCart(product: any) {

    if (this.products.find(item => item.uid === product.uid) === undefined) {
      product.pictures = 'http://localhost:4000/Product/' + product.pictures[0];
      product.subtotal = product.cost
      product.quantity = 1;
      this.products.push(product);
    }
    this.TotolPrice()
    console.log(this.products[0]);

  }


  removeProductCart(id: string) {
    this.products = this.products.filter(product => {
      if (product.uid !== id) {
        return product
      }
    })
    this.TotolPrice();
  }
  reduceProductQuantityCart(id: string) {
    this.products.map(product => {
      if (id == product.uid) {
        if (product.quantity > 1) {
          product.quantity--;
          product.subtotal = parseFloat(product.cost.split("h")[1]) * parseInt(product.quantity)
        }
      }
    })
    this.TotolPrice();
  }
  addProductQuantityCart(id: string) {
    this.products.map(product => {
      if (id === product.uid) {
        product.quantity++;
        product.subtotal = parseFloat(product.cost.split("h")[1]) * parseInt(product.quantity) as Number
        let test = product.cost.split("h")[1].split().join();
        console.log(test);

      }

    })
    this.TotolPrice();
  }

  TotolPrice() {
    //THIS IS IT
    this.Total = 0;
    this.products.map(product => {
      this.Total += product.subtotal;
    })
  }

  createOrder() {
    let data = {
      TotalCost: this.TotolPrice,
      orders: this.products,
      userid: '',
      paymentDetails: 'paypal',
    }
    return this.http.post<any>('http://localhost:4000/api/orders/', data)
  }


}
