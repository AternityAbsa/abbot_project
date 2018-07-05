import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpModule }    from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { AuthGuard } from './shared';
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
import { UserService } from './services/User.Service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {AuthGuard} from './guards/auth-guard.service';
import {AdminAuthGuard} from './guards/admin-auth-guard.service
import {TOKEN_NAME} from './services/Auth.Constants';
import {AuthConfig, AuthHttp} from 'angular2-jwt';


// AoT requires an exported function for factories
export function createTranslateLoader(http: HttpClient) {
    // for development
    // return new TranslateHttpLoader(http, '/start-angular/SB-Admin-BS4-Angular-5/master/dist/assets/i18n/', '.json');
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export function authHttpServiceFactory(http: Http) {
    return new AuthHttp(new AuthConfig({
      headerPrefix: 'Bearer',
      tokenName: TOKEN_NAME,
      globalHeaders: [{'Content-Type': 'application/json'}],
      noJwtError: false,
      noTokenScheme: true,
      tokenGetter: (() => localStorage.getItem(TOKEN_NAME))
    }), http);
  }

@NgModule({
    imports: [
        HttpModule,
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        NgbModule,
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
    providers:  [AuthHttp, AuthGuard, ProcessesService, ProcessModel,
                AuthService, AuthModel, ResourcesModel, 
                ResourceService, QueueModel, QueueService,
                UserManagementModel, UserManagementService, UserService,
                
                ],
    bootstrap: [AppComponent]
})
export class AppModule {}
