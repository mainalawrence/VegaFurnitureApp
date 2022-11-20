import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductStateService {

  Products: any[] = [];
  constructor(private http: HttpClient, private router: Router) {
    this.getProducts().subscribe(res => {
      console.log("this is called");

      this.Products = res;
    });
  }

  getProducts() {
    return this.http.get<any>("http://192.168.43.32:4000/api/products");
  }
  getProduct(id: string) {
    return this.http.get<any>("http://localhost:4000/api/products/" + id)
  }
  getTrushProducts() {
    return this.http.get<any>("http://localhost:4000/api/products");
  }

  UpdateProducts() {
    return this.http.get<any>("http://localhost:4000/api/products");
  }

  trushProducts(id: string) {
    return this.http.delete<any>("http://localhost:4000/api/products/" + id);
  }
  deleteProducts(id: string) {
    return this.http.delete<any>("http://localhost:4000/api/products/" + id);
  }
}
