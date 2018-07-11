import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ControlRoomComponent } from './control-room.component';


const routes: Routes = [
    {
        path: '',
        component: ControlRoomComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ControlRoomRoutingModule {

}
