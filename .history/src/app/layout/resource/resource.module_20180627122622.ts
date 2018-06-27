import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResourcePageRoutingModule } from './resource-routing.module';
import { ResourcePageComponent } from './resource.component';

@NgModule({
    imports: [CommonModule, ResourcePageRoutingModule],
    declarations: [ResourcePageComponent]
})
export class ResourcePageModule {}
