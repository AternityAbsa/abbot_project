import { NgModule } from '@angular/core';
import { TabViewModule } from 'primeng/tabview';
import { DragDropModule } from 'primeng/dragdrop';
import { MenuItem } from 'primeng/api';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
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
<<<<<<< HEAD
=======
import { NgbModule, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
>>>>>>> master
import { ProcessStepControllerService} from './services/ProcessStepControllerService';
import { CredentialsManagerService } from './services/CredentialsManagerService';
import { CredentialsManagerModel } from './models/CredentialsManagerModel';
import { ActionManagementModel } from './models/ActionManagementModel';
import { ActionManagementService } from './services/ActionManagementService';
<<<<<<< HEAD
=======
import { ReactiveFormsModule } from '@angular/forms';
>>>>>>> master
import { ResourceGroupModel } from './models/ResourceGroupModel';
import { ControlRoomService } from './services/ControlRoomService';
import { DataTableModule } from 'primeng/primeng';
import { PaginatorModule } from 'primeng/primeng';
import { TreeModule } from 'primeng/primeng';
<<<<<<< HEAD
import { FormsModule }  from '@angular/forms';
import {CarouselModule} from 'primeng/carousel';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
=======
import {CarouselModule} from 'primeng/carousel';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import { TabViewModule } from 'primeng/tabview';
import { DragDropModule } from 'primeng/dragdrop';
>>>>>>> master

// AoT requires an exported function for factories
export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
    imports: [
        HttpModule,
        CommonModule,
        BrowserModule,
        TabViewModule,
        DragDropModule,
        FormsModule,
        ConfirmDialogModule,
        CarouselModule,
        DataTableModule,
        TreeModule,
        PaginatorModule,
        BrowserAnimationsModule,
        HttpClientModule,
<<<<<<< HEAD
=======
        TabViewModule,
        DragDropModule,
        ConfirmDialogModule,
        CarouselModule,
        DataTableModule,
        TreeModule,
        PaginatorModule,
        ReactiveFormsModule,
>>>>>>> master
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
<<<<<<< HEAD
    providers:  [
                ProcessesService, ProcessModel,
                AuthService, AuthModel, ResourcesModel, ActionManagementService,
                ResourceService, QueueModel, QueueService, AuthGuard,
                UserManagementModel, UserManagementService,
                ProcessStepControllerService, ConfirmationService, ResourceGroupModel,ControlRoomService
=======
    providers:  [ 
                ProcessesService, ProcessModel, CreatedByOrLastModifiedBy, AbbotUserRole,
                AuthService, AuthModel, ResourcesModel, ActionManagementService,
                ResourceService, QueueModel, QueueService, AuthGuard, 
                UserManagementModel, UserManagementService, ProcessStepControllerService,
                NgbModule, UserRole, UserPermission, UserPermissionGroup, CredentialsManagerModel, CredentialsManagerService,
                ActionManagementModel,  ConfirmationService, ResourceGroupModel, ControlRoomService
>>>>>>> master
                ],
    bootstrap: [AppComponent]
})
export class AppModule {}
