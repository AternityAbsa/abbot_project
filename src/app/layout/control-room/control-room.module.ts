import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlRoomRoutingModule } from './control-room-routing.module';
import { TabViewModule } from 'primeng/tabview';
import { ControlRoomComponent } from './control-room.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, ControlRoomRoutingModule, PageHeaderModule, TabViewModule],
    declarations: [ControlRoomComponent]
})
export class ControlRoomModule {}
