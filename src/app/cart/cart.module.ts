import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { RouterModule } from '@angular/router';
import { NgxPayPalModule } from 'ngx-paypal';
import { HeaderModuleModule } from '../header-module/header-module.module';




@NgModule({
  declarations: [
    CartComponent,
  ],
  imports: [
    RouterModule.forChild([{
      path:'',
      children:[
        {path:'',component:CartComponent}
      ]
    }
    ]),
    CommonModule,
    NgxPayPalModule,
    HeaderModuleModule
  ]
})
export class CartModule { }
