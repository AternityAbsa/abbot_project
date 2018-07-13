import { CommonModule } from '@angular/common';

import { ValueRoutingModule } from './queue-routing.module';
import { QueuePageComponent } from './queue.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, QueuePageRoutingModule, PageHeaderModule],
    declarations: [QueuePageComponent]
})
export class QueuePageModule {}