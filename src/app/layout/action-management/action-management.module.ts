import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule as Ng2Charts } from 'ng2-charts';

import { ActionManagementRoutingModule } from './action-management-routing.module';
import { ActionManagementComponent } from './action-management.component';
import { PageHeaderModule } from '../../shared';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, Ng2Charts, ActionManagementRoutingModule, PageHeaderModule,ReactiveFormsModule, FormsModule],
    declarations: [ActionManagementComponent]
})
export class ActionManagementModule {}
