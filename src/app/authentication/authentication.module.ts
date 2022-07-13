import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';



@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {path:'',children:[
        {path:'login',component:LoginComponent},
        {path:'signup',component:SignupComponent}
      ]}
    ])
  ]
})
export class AuthenticationModule { }
