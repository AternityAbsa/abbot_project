import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserFormComponent } from './add-user-form.component';

const routes: Routes = [
    {
        path: '',
        component: AddUserFormComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AddUserFormRoutingModule {}
