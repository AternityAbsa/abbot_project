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
import { ProcessModel} from './models/ProcessModel';
import { AuthService} from './services/AuthService';
import { AuthModel} from './models/AuthModel';
import { ResourcesModel } from './models/ResourcesModel';
import { ResourceService } from './services/ResourceService';
import { QueueModel } from './models/QueueModel';
import { QueueService } from './services/QueueService';
import { UserManagementModel} from './models/UserManagementModel';
import { UserManagementService } from './services/UserManagementService';
import { ProcessStepControllerService} from './services/ProcessStepControllerService';
import { ActionManagementService } from './services/ActionManagementService';
import { ResourceGroupModel } from './models/ResourceGroupModel';
import { ControlRoomService } from './services/ControlRoomService';
import { DataTableModule } from 'primeng/primeng';
import { PaginatorModule } from 'primeng/primeng';
import { TreeModule } from 'primeng/primeng';
import { FormsModule }  from '@angular/forms';
import {CarouselModule} from 'primeng/carousel';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';

// AoT requires an exported function for factories
export function createTranslateLoader(http: HttpClient) {
    // for development
    // return new TranslateHttpLoader(http, '/start-angular/SB-Admin-BS4-Angular-5/master/dist/assets/i18n/', '.json');
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
                ProcessesService, ProcessModel,
                AuthService, AuthModel, ResourcesModel, ActionManagementService,
                ResourceService, QueueModel, QueueService, AuthGuard,
                UserManagementModel, UserManagementService,
                ProcessStepControllerService, ConfirmationService, ResourceGroupModel,ControlRoomService
                ],
    bootstrap: [AppComponent]
})
export class AppModule {}
