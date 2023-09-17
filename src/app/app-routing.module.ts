import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './Error.Component/error.component';
import { AboutUsComponent } from './header-module/Footer/about-us/about-us.component';
import { CustomerServiceComponent } from './header-module/Footer/customer-service/customer-service.component';
import { ContactUsComponent } from './header-module/Footer/contact-us/contact-us.component';
import { PrivacyPolicyComponent } from './header-module/Footer/privacy-policy/privacy-policy.component';
import { OrderreturnComponent } from './header-module/Footer/orderreturn/orderreturn.component';
import { ShippingdeliveryComponent } from './header-module/Footer/shippingdelivery/shippingdelivery.component';
import { SecurepaymentComponent } from './header-module/Footer/securepayment/securepayment.component';
import { TermsconditionComponent } from './header-module/Footer/termscondition/termscondition.component';
import { GuaranteeComponent } from './header-module/Footer/guarantee/guarantee.component';
import { SupportComponent } from './header-module/Footer/support/support.component';

const routes: Routes = [

  {
    path: 'about',
    component: AboutUsComponent
  },
  {
    path: 'customerservice',
    component: CustomerServiceComponent
  },
  {
    path: 'contactus',
    component: ContactUsComponent
  },
  {
    path: 'privacypolicy',
    component: PrivacyPolicyComponent
  },
  {
    path: 'orderreturn',
    component: OrderreturnComponent
  },
  {
    path: 'shipping',
    component: ShippingdeliveryComponent
  },
  {
    path: 'securepayment',
    component: SecurepaymentComponent
  },
  {
    path: 'support',
    component: SupportComponent
  },
  {
    path: 'guarantee',
    component: GuaranteeComponent
  },
  {
    path: 'termcondition',
    component: TermsconditionComponent
  },
  {
    path: 'profile',
    loadChildren: () => import('./users/users.module').then(users => users.UsersModule)
  },
  { path: 'admin', loadChildren: () => import('./admin-side/admin-side.module').then(mod => mod.AdminSideModule) },
  { path: 'auth', loadChildren: () => import('./authentication/authentication.module').then(mod => mod.AuthenticationModule) },

  {
    path: 'products',
    loadChildren: () => import('./client-side/client-side.module').then(mod => mod.ClientSideModule),

  },
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then(mod => mod.CartModule)
  },

  { path: '**', component: ErrorComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
