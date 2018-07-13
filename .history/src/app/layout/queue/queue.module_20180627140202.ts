import { NgModule  } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QueuePageRoutingModule } from './queue-routing.module';
import { QueuePageComponent } from './queue.component';
import { CommonModule } from '@angular/common';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
    imports: [CommonModule, QueuePageRoutingModule],
    declarations: [QueuePageComponent]
})
export class QueuePageModule {}