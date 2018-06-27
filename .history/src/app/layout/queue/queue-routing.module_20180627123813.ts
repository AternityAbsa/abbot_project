import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QueuePageComponent } from './queue.component';

const routes: Routes = [
    {
        path: '',
        component: QueuePageComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class QueuePageRoutingModule {}
