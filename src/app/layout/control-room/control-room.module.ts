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
import {MatButtonModule,
MatCheckboxModule,
MatStepperModule,
MatFormFieldModule,
MatCardModule,
MatProgressSpinnerModule,
MatMenuModule,
MatIconModule,
MatToolbarModule,
MatInputModule,
MatSelectModule,
MatSortModule,
MatTableModule} from '@angular/material';
import {CdkTableModule} from '@angular/cdk/table';
import { MatPaginatorModule } from '@angular/material';

@NgModule({
    imports: [CommonModule,ControlRoomRoutingModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatIconModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatSelectModule,
    MatSortModule,
    MatTableModule,
    CdkTableModule,
    MatInputModule,
    MatStepperModule,
    MatButtonModule,
    MatCheckboxModule,
    ScrollPanelModule,
    PageHeaderModule,
    ConfirmDialogModule,
    TreeModule,
    CarouselModule,
     DataTableModule.forRoot(),
     PaginatorModule,DragDropModule,LayoutModule, TabViewModule],
    declarations: [ControlRoomComponent],
    exports: [MatButtonModule, MatCheckboxModule]
})
export class ControlRoomModule {}
