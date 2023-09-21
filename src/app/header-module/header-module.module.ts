import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BedRoomComponent } from './Components/bed-room/bed-room.component';
import { FurnitureComponent } from './Components/furniture/furniture.component';
import { LightingComponent } from './Components/lighting/lighting.component';
import { OutDoorComponent } from './Components/out-door/out-door.component';
import { DinningComponent } from './Components/dinning/dinning.component';
import { KitchenComponent } from './Components/kitchen/kitchen.component';
import { ArtComponent } from './Components/art/art.component';
import { RouterModule } from '@angular/router';
import { PhoneMenuComponent } from './Components/phone-menu/phone-menu.component';
import { FooterComponent } from './Footer/footer/footer.component';
import { OrderreturnComponent } from './Footer/orderreturn/orderreturn.component';
import { ShippingdeliveryComponent } from './Footer/shippingdelivery/shippingdelivery.component';
import { SecurepaymentComponent } from './Footer/securepayment/securepayment.component';
import { SupportComponent } from './Footer/support/support.component';
import { GuaranteeComponent } from './Footer/guarantee/guarantee.component';
import { TermsconditionComponent } from './Footer/termscondition/termscondition.component';


@NgModule({
  declarations: [
    HeaderComponent,
    BedRoomComponent,
    FurnitureComponent,
    LightingComponent,
    OutDoorComponent,
    DinningComponent,
    KitchenComponent,
    ArtComponent,
    PhoneMenuComponent,
    FooterComponent,
    OrderreturnComponent,
    ShippingdeliveryComponent,
    SecurepaymentComponent,
    SupportComponent,
    GuaranteeComponent,
    TermsconditionComponent
  ],
  imports: [
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    RouterModule
  ],
  bootstrap:[HeaderComponent,FooterComponent],
  exports:[HeaderComponent,FooterComponent]
})
export class HeaderModuleModule { } 
