import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public adminuser=new BehaviorSubject(0) ;
  
 constructor(private http: HttpClient, private router: Router) { }
  
  loginUser(user:any) {
    return this.http.post<any>("http://localhost:4000/auth/login", user);
  }
 setadminuser(id:any){
   this.adminuser.next(id);
 }
 getadminuser(){
   return this.adminuser;
 }
  registerUser(user: any) {
    return this.http.post<any>("http://localhost:4000/api/users", user);
  }

  isLoggedIn() {
    return !!localStorage.getItem('vega')
  }

  getToken() {
    return localStorage.getItem('vega')
  }

  logoutUser() {
    localStorage.removeItem('vega');
    this.router.navigate(["/auth/login"])
  }
  
}