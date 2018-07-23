import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from 'primeng/dragdrop';
import { ControlRoomRoutingModule } from './control-room-routing.module';
import { TabViewModule } from 'primeng/tabview';
import { ControlRoomComponent } from './control-room.component';
import { PageHeaderModule } from './../../shared';
import { LayoutModule } from './../layout.module';
import { DataTableModule } from 'angular5-data-table';
import { PaginatorModule } from 'primeng/primeng';
import { TreeModule } from 'primeng/primeng';
import {CarouselModule} from 'primeng/carousel';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {MatInputModule, MatTableModule, MatToolbarModule } from '@angular/material';

@NgModule({
    imports: [CommonModule,ControlRoomRoutingModule,MatInputModule, MatTableModule, MatToolbarModule ,ScrollPanelModule, PageHeaderModule, ConfirmDialogModule,TreeModule,CarouselModule, DataTableModule.forRoot(), PaginatorModule,DragDropModule,LayoutModule, TabViewModule],
    declarations: [ControlRoomComponent],
    exports: [CommonModule, MatToolbarModule, MatInputModule, MatTableModule]
})
export class ControlRoomModule {}
