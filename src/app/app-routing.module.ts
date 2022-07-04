import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './Error.Component/error.component';

const routes: Routes = [
  {path:'products', loadChildren:()=>import('./client-side/client-side.module').then(mod=>mod.ClientSideModule)},
  {path:'admin',loadChildren:()=>import('./admin-side/admin-side.module').then(mod=>mod.AdminSideModule)},
  {path:'auth',loadChildren:()=>import('./authentication/authentication.module').then(mod=>mod.AuthenticationModule)},
  {path:'',redirectTo:'/products' ,pathMatch:'full'},
  {
    path:'cart',
    loadChildren: () => import('./cart/cart.module').then(mod => mod.CartModule)
  },
   { path:'**',component:ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
