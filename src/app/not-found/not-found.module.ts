import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotFoundRoutingModule } from './not-found-routing.module';
import { NotFoundComponent } from './not-found.component';
//import { PageHeaderModule } from './../../shared';

@NgModule({
  imports: [
    CommonModule,
    NotFoundRoutingModule
   // PageHeaderModule
  ],
  declarations: [NotFoundComponent]
})
export class NotFoundModule { }
