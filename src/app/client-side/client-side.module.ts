import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './Components/ProductView/product-list/product-list.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ProductListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:'',children:[
        {path:'',component:ProductListComponent}
      ]}
    ])

  ]
})
export class ClientSideModule { }
