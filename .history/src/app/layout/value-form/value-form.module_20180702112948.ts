import { NgModule, NO_ERRORS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ValueFormRoutingModule } from './value-form-routing.module';
import { ValueFormComponent } from './value-form.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, ValueFormRoutingModule, PageHeaderModule],
    declarations: [ValueFormComponent],
    schemas: [NO_ERRORS_SCHEMA]
})
export class ValueFormModule {}
