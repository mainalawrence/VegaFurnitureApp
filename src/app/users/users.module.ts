import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserDashboardComponent } from './Component/user-dashboard/user-dashboard.component';
import { OrdersComponent } from './Component/orders/orders.component';
import { UserProfileComponent } from './Component/user-profile/user-profile.component';
import { HeaderModuleModule } from '../header-module/header-module.module';
import { AppRoutingModule } from '../app-routing.module';
import { MessagesComponent } from './Component/messages/messages.component';


@NgModule({
  declarations: [
    MessagesComponent,
    UserDashboardComponent,
    OrdersComponent,
    UserProfileComponent
  ],
  imports: [
    HeaderModuleModule,
    CommonModule,
    AppRoutingModule,
    NgbModule,
    RouterModule.forChild([
      {
        path: "", component:UserDashboardComponent, children: [
          { path: "messages", component: MessagesComponent },
          { path: "orders", component: OrdersComponent },
          { path: "profile", component: UserProfileComponent },
        ]
      }
    ]),
  ],
  bootstrap: [UserDashboardComponent]
})

export class UsersModule { }
