import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResourcePageComponent } from './resource.component';

const routes: Routes = [
    {
        path: 'resource',
        component: ResourcePageComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ResourcePageRoutingModule {}
