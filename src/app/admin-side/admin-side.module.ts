import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './Component/ProductComponents/products/products.component';
import { StatisticsComponent } from './Component/Report/statistics/statistics.component';
import { PagesComponent } from './Component/pages/pages.component';
import { SettingsComponent } from './Component/settings/settings.component';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { CoupensComponent } from './Component/coupens/coupens.component';
import { MediaComponent } from './Component/media/media.component';
import { MainAdminComponent } from './Component/main-admin/main-admin.component';
import { BodyComponent } from './Component/body/body.component';
import { SidenavComponent } from './Component/sidenav/sidenav.component';
import { JournalComponent } from './Component/journal/journal.component';
import { OrdersComponent } from './Component/orders/orders.component';
import { UserComponent } from './Component/Users/users/users.component';
import { UpdateUsersComponent } from './Component/Users/update-users/update-users.component';
import { TrushUsersComponent } from './Component/Users/trush-users/trush-users.component';
import { UsersTableComponent } from './Component/Users/users-table/users-table.component';
import { ReportComponent } from './Component/Report/report/report.component';
import { HeaderComponent } from './Component/header/header.component';
import { ProductHeaderComponent } from './Component/ProductComponents/product-header/product-header.component';

import { ProductviewComponent } from './Component/ProductComponents/productview/productview.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewProductFormComponent } from './Component/ProductComponents/new-product-form/new-product-form.component';
import { ProductListComponent } from './Component/ProductComponents/product-list/product-list.component';

const routes: Routes = [
  {
    path: '', component: MainAdminComponent, children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      {
        path: 'products', component: ProductsComponent, children: [
          { path: '', component: ProductListComponent },
          { path: 'new', component: NewProductFormComponent },
          { path: 'trush', component: ProductviewComponent }
        ]
      },
      { path: 'statistics', component: StatisticsComponent },
      { path: 'coupens', component: CoupensComponent },
      { path: 'pages', component: PagesComponent },
      { path: 'media', component: MediaComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'journal', component: JournalComponent },
      { path: 'users', component: UserComponent },
      { path: 'orders', component: OrdersComponent }

    ]
  }
];

@NgModule({
  declarations: [
    MainAdminComponent,
    BodyComponent,
    SidenavComponent,
    DashboardComponent,
    ProductsComponent,
    CoupensComponent,
    PagesComponent,
    MediaComponent,
    SettingsComponent,
    JournalComponent,
    OrdersComponent,
    UserComponent,
    UpdateUsersComponent,
    TrushUsersComponent,
    UsersTableComponent,
    ReportComponent,
    StatisticsComponent,
    HeaderComponent,
    ProductHeaderComponent,
    NewProductFormComponent,
    ProductListComponent
  ],
  imports: [
    NgbModule,
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  bootstrap: [MainAdminComponent, NewProductFormComponent]

})
export class AdminSideModule { }
