import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { ResourceManagementComponent } from './components/sidebar/resource-management/resource-management.component';
import { QueuManagementComponent } from './components/sidebar/queu-management/queu-management.component';
import { QueueManagementComponent } from './queue-management/queue-management.component';

@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        TranslateModule,
        NgbDropdownModule.forRoot()
    ],
    declarations: [LayoutComponent, SidebarComponent, HeaderComponent, ResourceManagementComponent, QueuManagementComponent, QueueManagementComponent]
})
export class LayoutModule {}
