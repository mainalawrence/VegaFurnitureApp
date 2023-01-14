import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserDashboardComponent } from './Component/user-dashboard/user-dashboard.component';
import { OrdersComponent } from './Component/orders/orders.component';
import { UserProfileComponent } from './Component/user-profile/user-profile.component';
import { HeaderModuleModule } from '../header-module/header-module.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule.forChild([
      {
        path: "", component: UserDashboardComponent, children: [
          { path: "messages", component: UserDashboardComponent },
          { path: "orders", component: OrdersComponent },
          { path: "profile", component: UserProfileComponent },
        ]
      }
    ]),
    HeaderModuleModule,

  ],
  bootstrap: []
})
export class UsersModule { }
