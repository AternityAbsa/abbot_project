import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GridRoutingModule } from './grid-routing.module';
import { GridComponent } from './grid.component';
import { PageHeaderModule } from './../../shared';
import { DragDropModule } from 'primeng/dragdrop';
import { ControlRoomRoutingModule } from './control-room-routing.module';
import { TabViewModule } from 'primeng/tabview';
import { ControlRoomComponent } from './control-room.component';
import { PageHeaderModule } from './../../shared';
import { LayoutModule } from './../layout.module';
import { DataTableModule } from 'primeng/primeng';
import { PaginatorModule } from 'primeng/primeng';
import { TreeModule } from 'primeng/primeng';
import { FormsModule }  from '@angular/forms';
import {CarouselModule} from 'primeng/carousel';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ScrollPanelModule} from 'primeng/scrollpanel';

@NgModule({
    imports: [CommonModule, GridRoutingModule, PageHeaderModule, ConfirmDialogModule,TreeModule,FormsModule,CarouselModule,DataTableModule, PaginatorModule,DragDropModule,LayoutModule, TabViewModule],
    declarations: [GridComponent]
})
export class GridModule {}
