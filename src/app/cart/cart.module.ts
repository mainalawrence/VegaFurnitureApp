import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { RouterModule } from '@angular/router';
import { NgxPayPalModule } from 'ngx-paypal';
import { HeaderModuleModule } from '../header-module/header-module.module';
import { CheckoutComponent } from './checkout/checkout.component';




@NgModule({
  declarations: [
    CartComponent,
    CheckoutComponent,
  ],
  imports: [
    RouterModule.forChild([{
      path:'',
      children:[
        {path:'',component:CartComponent},
        {path:'checkout',component:CheckoutComponent}
      ]
    }
    ]),
    CommonModule,
    NgxPayPalModule,
    HeaderModuleModule
  ]
})
export class CartModule { }
