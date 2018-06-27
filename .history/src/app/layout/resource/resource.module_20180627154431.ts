import { NgModule, NO_ERRORS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResourcePageRoutingModule } from './resource-routing.module';
import { ResourcePageComponent } from './resource.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, ResourcePageRoutingModule, import { PageHeaderModule } from './../../shared';],
    declarations: [ResourcePageComponent],
    schemas: [NO_ERRORS_SCHEMA]
})
export class ResourcePageModule {}
