import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../Services/auth.service'


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css','../login/login.component.css']
})
export class SignupComponent implements OnInit {

 signinForm!:FormGroup;
  constructor(private fb:FormBuilder,private authService:AuthService,private router:Router) { }

  ngOnInit(): void {
      this.signinForm= this.fb.group({
      email:['',[Validators.email,Validators.required]],
      password:['',[Validators.required]],
      name:['',[Validators.required]],
    })
  }
  onSubmit(){
    this.authService.registerUser(this.signinForm.value).subscribe(
       (res) => {
        console.log(res);
        
        this.router.navigate(["/auth/login"])
      },
      (error) => {
        console.log(error.error);
      })
 
  }


}
