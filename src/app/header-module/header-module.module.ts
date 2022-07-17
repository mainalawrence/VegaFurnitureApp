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



@NgModule({
  declarations: [
    HeaderComponent,
    BedRoomComponent,
    FurnitureComponent,
    LightingComponent,
    OutDoorComponent,
    DinningComponent,
    KitchenComponent,
    ArtComponent
  ],
  imports: [
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    
  
  ],
  bootstrap:[HeaderComponent],
  exports:[HeaderComponent]
})
export class HeaderModuleModule { } 
