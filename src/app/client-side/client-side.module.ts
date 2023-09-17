import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './Components/ProductView/product-list/product-list.component';
import { RouterModule } from '@angular/router';
import { ProductComponent } from './Components/ProductView/product/product.component';
import { ProductFilterComponent } from './Components/product-filter/product-filter.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductDetailsComponent } from './Components/ProductView/product-details/product-details.component';
import { CategoryComponent } from './Components/category/category.component';
import { CategoryListComponent } from './Components/category-list/category-list.component';
import { HeaderModuleModule } from '../header-module/header-module.module';
import { ProducttypeComponent } from './Components/producttype/producttype.component';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductComponent,
    ProductFilterComponent,
    ProductDetailsComponent,
    CategoryComponent,
    CategoryListComponent,
    ProducttypeComponent,
  ],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule.forChild([
      {
        path: '', children: [
          { path: '', component: ProductListComponent },
          { path: ':id', component: ProductDetailsComponent },
          {
            path: ':category', children: [
              { path: ':type', component: ProducttypeComponent }
            ]
          },

        ]
      }
    ]),
    HeaderModuleModule,
  ],
  bootstrap: [ProductFilterComponent]
})
export class ClientSideModule { }
