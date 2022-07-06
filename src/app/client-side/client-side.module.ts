import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './Components/ProductView/product-list/product-list.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ProductComponent } from './Components/ProductView/product/product.component';
import { ProductFilterComponent } from './Components/product-filter/product-filter.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    ProductListComponent,
    HeaderComponent,
    FooterComponent,
    ProductComponent,
    ProductFilterComponent,
    
  ],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule.forChild([
      {path:'',children:[
        {path:'',component:ProductListComponent}
      ]}
    ])

  ],
  bootstrap:[ProductFilterComponent]
})
export class ClientSideModule { }
