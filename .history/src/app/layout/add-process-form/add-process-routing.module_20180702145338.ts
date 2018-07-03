import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProcessFormComponent } from './add-process-form.component';

const routes: Routes = [
    {
        path: '',
        component: BlankPageComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BlankPageRoutingModule {}
