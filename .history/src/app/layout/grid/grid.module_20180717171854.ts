import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridRoutingModule } from './grid-routing.module';
import { GridComponent } from './grid.component';
import { DragDropModule } from 'primeng/dragdrop';
import { TabViewModule } from 'primeng/tabview';
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
    imports: [CommonModule, GridRoutingModule, ScrollPanelModule, PageHeaderModule, 
              ConfirmDialogModule,TreeModule,FormsModule,CarouselModule,DataTableModule, PaginatorModule,DragDropModule,LayoutModule, TabViewModule],
    declarations: [GridComponent]
})
export class GridModule {}
