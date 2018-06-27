import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QueuePageRoutingModule } from './queue-routing.module';
import { QueuePageComponent } from './queue.component';

@NgModule({
    imports: [CommonModule, QueuePageRoutingModule],
    declarations: [QueuePageComponent]
})
export class QueuePageModule {}
