import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActionManagementComponent } from './action-management.component';

const routes: Routes = [
    {
        path: '', component: ActionManagementComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ActionManagementRoutingModule {}
