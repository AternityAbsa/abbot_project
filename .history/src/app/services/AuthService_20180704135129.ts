import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import {Http, Headers, Response,RequestMethod, RequestOptions, RequestOptionsArgs} from '@angular/http';
import * as models from '../models/models';
import { Observable } from 'rxjs/Observable'; 
import 'rxjs/Rx';
import { AuthModel } from '../models/models';
import {TOKEN_AUTH_PASSWORD, TOKEN_AUTH_USERNAME} from '../services/Auth.Constants';
import {AuthConfig, AuthHttp} from 'angular2-jwt';

@Injectable()
export class AuthService {


  private base_url = 'http://localhost:8080';
  private user_rest_api = '/abbot/user-management';

  constructor(private http: HttpClient) {
  }

  attemptAuth(ussername: string, password: string): Observable<any>{
    const credentials = {username: ussername, password: password};
    console.log('attempAuth ::');
    return this.http.post('http://localhost:8080/abbot/authenticate', credentials);
  }
}
