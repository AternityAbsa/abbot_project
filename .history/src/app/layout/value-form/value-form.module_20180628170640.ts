import { CommonModule } from '@angular/common';

import { ValueFormRoutingModule } from './value-form-routing.module';
import { Val } from './value-form.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, QueuePageRoutingModule, PageHeaderModule],
    declarations: [QueuePageComponent]
})
export class QueuePageModule {}
