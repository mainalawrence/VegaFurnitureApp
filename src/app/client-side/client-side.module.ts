import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './Components/ProductView/product-list/product-list.component';
import { RouterModule } from '@angular/router';
import { ProductComponent } from './Components/ProductView/product/product.component';
import { ProductFilterComponent } from './Components/product-filter/product-filter.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductDetailsComponent } from './Components/ProductView/product-details/product-details.component';
import { FormsModule } from '@angular/forms';
import { CategoryComponent } from './Components/category/category.component';
import { CategoryListComponent } from './Components/category-list/category-list.component';
import { HeaderModuleModule } from '../header-module/header-module.module';





@NgModule({
  declarations: [
    ProductListComponent,
    ProductComponent,
    ProductFilterComponent,
    ProductDetailsComponent,
    CategoryComponent,
    CategoryListComponent,
    
    
  ],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule.forChild([
      {path:'',children:[
        {path:'',component:ProductListComponent},
        {path:'category',component:CategoryListComponent},
        {path:':id',component:ProductDetailsComponent}
      ]}
    ]),
    HeaderModuleModule


  ],
  bootstrap:[ProductFilterComponent]
})
export class ClientSideModule { }
