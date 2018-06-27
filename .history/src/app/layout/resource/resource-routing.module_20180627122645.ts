import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResourcePageComponent } from './blank-page.component';

const routes: Routes = [
    {
        path: '',
        component: ResourcePageComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ResourcePageRoutingModule {}
