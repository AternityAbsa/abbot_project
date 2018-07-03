import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { ChartsModule as Ng2Charts } from 'ng2-charts';

import { AddProcessRoutingModule } from './add-process-routing.module';
import { Add } from './add-process-form.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
    imports: [CommonModule, ChartsRoutingModule, PageHeaderModule],
    declarations: [ChartsComponent]
})
export class ChartsModule {}
