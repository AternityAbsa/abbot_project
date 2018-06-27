import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlankPageRoutingModule } from './resource-routing.module';
import { BlankPageComponent } from './resource.component';

@NgModule({
    imports: [CommonModule, BlankPageRoutingModule],
    declarations: [BlankPageComponent]
})
export class BlankPageModule {}
