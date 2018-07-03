import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddProcessRoutingModule } from './add-process-routing.module';
import { AddProcessFormComponent } from './add-process-form.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
    imports: [CommonModule, AddProcessRoutingModule, PageHeaderModule],
    declarations: [AddProcessFormComponent]
})
export class AddProcessFormModule {}
