import { CommonModule } from '@angular/common';

import { ValueFormRoutingModule } from './value-form-routing.module';
import { ValueFormComponent } from './value-form.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, ValueFormRoutingModule, PageHeaderModule],
    declarations: [QueuePageComponent]
})
export class QueuePageModule {}
