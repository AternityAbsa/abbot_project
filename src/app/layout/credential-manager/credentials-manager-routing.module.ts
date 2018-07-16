import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CredentialManagerComponent } from './credential-manager.component';

const routes: Routes = [
    {
        path: '', component: CredentialManagerComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CredentialsManagerRoutingModule {
}
