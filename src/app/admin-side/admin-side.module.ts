import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './Component/products/products.component';
import { StatisticsComponent } from './Component/statistics/statistics.component';
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
import { UsersComponent } from './Component/users/users.component';
const routes: Routes = [
  {
    path: '', component: MainAdminComponent, children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'statistics', component: StatisticsComponent },
      { path: 'coupens', component: CoupensComponent },
      { path: 'pages', component: PagesComponent },
      { path: 'media', component: MediaComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'journal', component: JournalComponent },
      { path: 'users', component: UsersComponent },
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
    StatisticsComponent,
    CoupensComponent,
    PagesComponent,
    MediaComponent,
    SettingsComponent,
    JournalComponent,
    OrdersComponent,
    UsersComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,

  ],
  bootstrap: [MainAdminComponent, SidenavComponent]
})
export class AdminSideModule { }
