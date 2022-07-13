import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CartService {
  Total:number=0;
  products:any[]=[]

  constructor(private http: HttpClient,  ) {
      this.TotolPrice()
   }

   productCount(){
     return this.products.length;
   }
   
  addProductCart(product:any){
     
   if(this.products.find(item=>item.id===product.id)===undefined){
     product[0].image='http://localhost:4000/Product/'+product[0].images.split(',')[0];
     this.products.push(product[0]);
     console.log(product[0]); 
   }
  this.TotolPrice()
  }
   removeProductCart(id:string){
    this.products=this.products.filter(product=>{
       if(product.id !==id){
        return product
      }
    })
    this.TotolPrice();
  }
  reduceProductQuantityCart(id:string){
    this.products.map(product=>{
    if(id==product.id){
        if(product.quantity>1){
        product.quantity--;
        product.subtotal=product.price*product.quantity
      }
    }
    })
    this.TotolPrice();
  }
    addProductQuantityCart(id:string){
     
    this.products.map(product=>{
        if(id===product.id){
          product.quantity++;
          product.subtotal=product.price*product.quantity
        }
     
    })
    this.TotolPrice();
  }

  TotolPrice(){
    //THIS IS IT
    this.Total=0;
    this.products.map(product=>{
     this.Total+=product.subtotal;
    })
  }

  createOrder(){
    let data={
    TotalCost:this.TotolPrice,
    orders:this.products,
    userid:'',
    paymentDetails:'paypal',
    }
    return this.http.post<any>('http://localhost:4000/api/orders/',data)
  }


}
