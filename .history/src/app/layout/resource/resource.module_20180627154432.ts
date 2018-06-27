import { NgModule, NO_ERRORS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResourcePageRoutingModule } from './resource-routing.module';
import { ResourcePageComponent } from './resource.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, ResourcePageRoutingModule, ],
    declarations: [ResourcePageComponent],
    schemas: [NO_ERRORS_SCHEMA]
})
export class ResourcePageModule {}
