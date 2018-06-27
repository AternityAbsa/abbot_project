import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlankPageRoutingModule } from './queue-routing.module';
import { BlankPageComponent } from './blank-page.component';

@NgModule({
    imports: [CommonModule, BlankPageRoutingModule],
    declarations: [BlankPageComponent]
})
export class BlankPageModule {}
