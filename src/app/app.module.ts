import { NgModule } from '@angular/core';
import { TabViewModule } from 'primeng/tabview';
import { DragDropModule } from 'primeng/dragdrop';
import { MenuItem } from 'primeng/api';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { Http, HttpModule }    from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';
import { ProcessesService} from './services/ProcessesServices';
import { AbbotProcess} from './models/AbbotProcess';
import { AuthService} from './services/AuthService';
import { AuthModel} from './models/AuthModel';
import { ResourceService } from './services/ResourceService';
import { AbbotWorkQueue } from './models/AbbotWorkQueue';
import { AbbotElementType } from './models/AbbotElementType';
import { AbbotKeyStore } from './models/AbbotKeyStore';
import { AbbotProcessStep } from './models/AbbotProcessStep';
import { AbbotWorkQueueItem } from './models/AbbotWorkQueueItem';
import { AbbotAction } from './models/AbbotAction';
import { AbbotResource } from './models/AbbotResource';
import { QueueService } from './services/QueueService';
import { AbbotUser} from './models/AbbotUser';
import { UserManagementService } from './services/UserManagementService';
import { ProcessStepControllerService} from './services/ProcessStepControllerService';
import { ActionManagementService } from './services/ActionManagementService';
import { AbbotResourceGroup} from './models/AbbotResourceGroup';
import { ControlRoomService } from './services/ControlRoomService';
import { DataTableModule } from 'angular5-data-table';
import { PaginatorModule } from 'primeng/primeng';
import { TreeModule } from 'primeng/primeng';
import { FormsModule }  from '@angular/forms';
import {CarouselModule} from 'primeng/carousel';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

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
        DataTableModule.forRoot(),
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
                ProcessesService, AbbotProcess,
                AuthService, AuthModel, AbbotResource, ActionManagementService,
                ResourceService, AbbotWorkQueue, QueueService, AuthGuard,
                AbbotUser, UserManagementService,
                ProcessStepControllerService,
                ConfirmationService,
                AbbotResourceGroup,
                ControlRoomService,
                AbbotElementType,
                AbbotKeyStore,
                AbbotProcessStep,
                AbbotWorkQueueItem,
                AbbotUser,
                AbbotAction],
    bootstrap: [AppComponent]
})
export class AppModule {}
