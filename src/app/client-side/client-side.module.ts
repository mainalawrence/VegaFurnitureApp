import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './Components/ProductView/product-list/product-list.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ProductComponent } from './Components/ProductView/product/product.component';
import { ProductFilterComponent } from './Components/product-filter/product-filter.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductDetailsComponent } from './Components/ProductView/product-details/product-details.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProductListComponent,
    HeaderComponent,
    FooterComponent,
    ProductComponent,
    ProductFilterComponent,
    ProductDetailsComponent,
    
  ],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    RouterModule.forChild([
      {path:'',children:[
        {path:'',component:ProductListComponent},
        {path:':id',component:ProductDetailsComponent}

      ]}
    ])

  ],
  bootstrap:[ProductFilterComponent,FooterComponent,HeaderComponent]
})
export class ClientSideModule { }
