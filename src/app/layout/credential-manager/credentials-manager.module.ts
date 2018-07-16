import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CredentialsManagerRoutingModule } from './credentials-manager-routing.module';
import { CredentialManagerComponent } from './credential-manager.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, CredentialsManagerRoutingModule, PageHeaderModule],
    declarations: [CredentialManagerComponent]
})
export class CredentialsManagerModule {}
