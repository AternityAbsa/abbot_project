import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { Http, HttpModule }    from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';
import { ProcessesService} from './services/ProcessesServices';
import { ProcessModel, CreatedByOrLastModifiedBy, AbbotUserRole } from './models/ProcessModel';
import { AuthService} from './services/AuthService';
import { AuthModel} from './models/AuthModel';
import { ResourcesModel } from './models/ResourcesModel';
import { ResourceService } from './services/ResourceService';
import { QueueModel } from './models/QueueModel';
import { QueueService } from './services/QueueService';
import { UserManagementModel, UserRole, UserPermission, UserPermissionGroup } from './models/UserManagementModel';
import { UserManagementService } from './services/UserManagementService';
import { NgbModule, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ProcessStepControllerService} from './services/ProcessStepControllerService';
import { CredentialsManagerService } from './services/CredentialsManagerService';
import { CredentialsManagerModel } from './models/CredentialsManagerModel';
import { ActionManagementModel } from './models/ActionManagementModel';
import { ActionManagementService } from './services/ActionManagementService';
import { ReactiveFormsModule } from '@angular/forms';
import { ResourceGroupModel } from './models/ResourceGroupModel';
import { ControlRoomService } from './services/ControlRoomService';
import { DataTableModule } from 'primeng/primeng';
import { PaginatorModule } from 'primeng/primeng';
import { TreeModule } from 'primeng/primeng';
import {CarouselModule} from 'primeng/carousel';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';

// AoT requires an exported function for factories
export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
    imports: [
        HttpModule,
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        TabViewModule,
        DragDropModule,
        ConfirmDialogModule,
        CarouselModule,
        DataTableModule,
        TreeModule,
        PaginatorModule,
        ReactiveFormsModule,
        NgbModule.forRoot(),
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: createTranslateLoader,
                deps: [HttpClient]
            }
        }),
        AppRoutingModule
    ],
    declarations: [AppComponent],
    providers:  [ 
                ProcessesService, ProcessModel, CreatedByOrLastModifiedBy, AbbotUserRole,
                AuthService, AuthModel, ResourcesModel, ActionManagementService,
                ResourceService, QueueModel, QueueService, AuthGuard, 
                UserManagementModel, UserManagementService, ProcessStepControllerService,
                NgbModule, UserRole, UserPermission, UserPermissionGroup, CredentialsManagerModel, CredentialsManagerService,
                ActionManagementModel, ConfirmationService, ResourceGroupModel,ControlRoomService
                ],
    bootstrap: [AppComponent]
})
export class AppModule {}
