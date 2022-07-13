import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class OrdersStateService {

    constructor(private http: HttpClient, private router: Router) { }

  getOrder(){
    return this.http.get<any>("http://localhost:4000/api/Orders");
  }
   getTrushOrder(){
    return this.http.get<any>("http://localhost:4000/api/Orders");
  }

   UpdateOrder(){
    return this.http.get<any>("http://localhost:4000/api/Orders");
  } 

  trushOrder(id:string){
    return this.http.delete<any>("http://localhost:4000/api/Orders/"+id);
  }
  deleteOrder(id:string){
    return this.http.delete<any>("http://localhost:4000/api/Orders/"+id);
  }
}
