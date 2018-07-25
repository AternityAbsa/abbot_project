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
MatInputModule,
MatSelectModule,
MatSortModule,
MatTableModule} from '@angular/material';
import {CdkTableModule} from '@angular/cdk/table';
import { MatPaginatorModule } from '@angular/material';
import { MatDialogModule } from '@angular/material';
import { ConfirmationDialog } from './confirmation-dialog.component';
import {OrderListModule} from 'primeng/orderlist';
import { MaterialModule } from '../../material.module';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
    imports: [CommonModule,ControlRoomRoutingModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatIconModule,
    MatDialogModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatSelectModule,
    MaterialModule,
    MatToolbarModule,
    MatSortModule,
    MatTableModule,
    CdkTableModule,
    MatInputModule,
    MatStepperModule,
    MatButtonModule,
    MatCheckboxModule,
    OrderListModule,
    ScrollPanelModule,
    PageHeaderModule,
    ConfirmDialogModule,
    TreeModule,
    CarouselModule,
    DataTableModule.forRoot(),
    PaginatorModule,DragDropModule,LayoutModule, TabViewModule],
    declarations: [ControlRoomComponent,ConfirmationDialog],
    exports: [MatButtonModule, MatCheckboxModule],
    entryComponents: [ConfirmationDialog]
})
export class ControlRoomModule {}
