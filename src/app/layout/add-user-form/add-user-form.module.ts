import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddUserFormRoutingModule } from './add-user-routing.module';
import { AddUserFormComponent } from './add-user-form.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, AddUserFormRoutingModule, PageHeaderModule ],
    declarations: [AddUserFormComponent]
})
export class AddUserFormModule {}
