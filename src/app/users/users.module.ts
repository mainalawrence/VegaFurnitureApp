import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserDashboardComponent } from './Component/user-dashboard/user-dashboard.component';
import { OrdersComponent } from './Component/Orders/orders/orders.component';
import { UserProfileComponent } from './Component/user-profile/user-profile.component';
import { HeaderModuleModule } from '../header-module/header-module.module';
import { MessagesComponent } from './Component/messages/messages.component';
import { ClosedordersComponent } from './Component/Orders/closedorders/closedorders.component';
import { OpenordersComponent } from './Component/Orders/openorders/openorders.component';


@NgModule({
  declarations: [
    MessagesComponent,
    UserDashboardComponent,
    OrdersComponent,
    UserProfileComponent,
    ClosedordersComponent,
    OpenordersComponent
  ],
  imports: [
    HeaderModuleModule,
    CommonModule,

    NgbModule,
    RouterModule.forChild([
      {
        path: "", component: UserDashboardComponent, children: [
          { path: "messages", component: MessagesComponent },
          { path: "orders", component: OrdersComponent },
          { path: "user", component: UserProfileComponent },
        ]
      }
    ]),
  ],
  bootstrap: [UserDashboardComponent]
})

export class UsersModule { }
