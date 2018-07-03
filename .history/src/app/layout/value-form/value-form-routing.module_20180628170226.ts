import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ValueFormComponent } from './value-form.component';

const routes: Routes = [
    {
        path: '',
        component: ValueFormComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class QueuePageRoutingModule {}
