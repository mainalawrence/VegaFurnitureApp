import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserStateService {

  constructor(private http: HttpClient, private router: Router) {}

  getUsers(){ 
    return this.http.get<any>("http://localhost:4000/api/users");
  }
    getTrushedUsers(){ 
    return this.http.get<any>("http://localhost:4000/api/trush/users");
  }

  getTrushUsers(){
    return this.http.get<any>("http://localhost:4000/api/users");
  }
  
   UpdateUsers(user:any,id:string){
    return this.http.put<any>("http://localhost:4000/api/users/"+id,user);
  } 

  trushUsers(id:string){
    return this.http.delete<any>("http://localhost:4000/api/users/soft/"+id);
  }
  deleteUsers(id:string){
    return this.http.delete<any>("http://localhost:4000/api/users/"+id);
  }



}
