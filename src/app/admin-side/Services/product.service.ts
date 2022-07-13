import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  headers=new HttpHeaders({

  })
   constructor(private http: HttpClient, private router: Router ) { 
   
   }

    getProducts() {
    return this.http.get<any>("http://localhost:4000/api/products");
    }

    getTrushedProducts() {
    return this.http.get<any>("http://localhost:4000/api/trush/products");
    }
    
   createProducts(product:any) {
    return this.http.post<any>("http://localhost:4000/api/products",product)
    }
    updateProduct(product:any){
      return this.http.put<any>('http://localhost:4000/api/products',product);
    }
    deleteProduct(id:string){
      return this.http.delete<any>('http://localhost:4000/api/products/soft/'+id);
    }
    trushedProduct(id:string){
    return this.http.get<any>("http://localhost:4000/api/products");

    }
}
