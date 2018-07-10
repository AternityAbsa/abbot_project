import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddProcessFormRoutingModule } from './add-process-form-routing.module';
import { AddProcessFormComponent } from './add-process-form.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, AddProcessFormRoutingModule, PageHeaderModule ],
    declarations: [AddProcessFormComponent]
})
export class AddProcessFormModule {}
