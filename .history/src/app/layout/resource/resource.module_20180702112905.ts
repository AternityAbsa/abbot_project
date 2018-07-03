import { NgModule, NO_ERRORS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResourcePageRoutingModule } from './resource-routing.module';
import { ResourcePageComponent } from './resource.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, ResourcePageRoutingModule, PageHeaderModule],
    deschemas: [NO_ERRORS_SCHEMA]clarations: [ResourcePageComponent],
    
})
export class ResourcePageModule {}
