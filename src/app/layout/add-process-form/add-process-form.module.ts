import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddProcessFormRoutingModule } from './add-process-form-routing.module';
import { AddProcessFormComponent } from './add-process-form.component';

@NgModule({
    imports: [CommonModule, AddProcessFormRoutingModule],
    declarations: [AddProcessFormComponent]
})
export class AddProcessFormModule {}
