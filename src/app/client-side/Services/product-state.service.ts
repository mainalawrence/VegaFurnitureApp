import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductStateService {

   Products:any[]=[];
  constructor(private http: HttpClient, private router: Router ) { }

  getProducts(){
    return this.http.get<any>("http://localhost:4000/api/products");
  }
   getTrushProducts(){
    return this.http.get<any>("http://localhost:4000/api/products");
  }

   UpdateProducts(){
    return this.http.get<any>("http://localhost:4000/api/products");
  } 

  trushProducts(id:string){
    return this.http.delete<any>("http://localhost:4000/api/products/"+id);
  }
  deleteProducts(id:string){
    return this.http.delete<any>("http://localhost:4000/api/products/"+id);
  }
}
