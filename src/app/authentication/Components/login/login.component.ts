import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm!:FormGroup;
  successMessage: boolean = false;

  constructor(private fb:FormBuilder, private authService:AuthService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm= this.fb.group({
      email:['',[Validators.email,Validators.required]],
      password:['',[Validators.required]],
    })
  }
  
   loggin(){
     console.log(this.loginForm.value);
     
  this.authService.loginUser(this.loginForm.value).subscribe(
      (res) => {
        console.log(res);
        localStorage.setItem('vega',JSON.stringify({name:res.name,token:res.token,uid:res.uid}));
        this.authService.setadminuser(res.role)
        if(res.role===0){
        this.router.navigate(["/"])
        this.authService.setadminuser(res.role)
        }
         else if(res.role===1){
        this.router.navigate(["/admin"])
        this.authService.setadminuser(res.role)
        }
        else{
        this.router.navigate(["/auth/login"])
        }
      this.successMessage=true;
      },
      (error) => {
        console.log(error.error);
      })
  }
}
