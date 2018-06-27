import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResourcePageRoutingModule } from './resource-routing.module';
import { ResourcePageComponent } from './resource.component';

@NgModule({
    imports: [CommonModule, BlankPageRoutingModule],
    declarations: [BlankPageComponent]
})
export class BlankPageModule {}
