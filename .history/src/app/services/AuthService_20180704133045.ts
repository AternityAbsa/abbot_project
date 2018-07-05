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
  static AUTH_TOKEN = '/oauth/token';

  private user_rest = /abbot/user-management

  constructor(private http: Http) {
  }

  login(username: string, password: string) {
    const body = `username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}&grant_type=password`;

    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Authorization', 'Basic ' + btoa(TOKEN_AUTH_USERNAME + ':' + TOKEN_AUTH_PASSWORD));

    return this.http.post(AuthService.AUTH_TOKEN, body, {headers})
      .map(res => res.json())
      .map((res: any) => {
        if (res.access_token) {
            console.log(res.access_token);
          return res.access_token;
        }
        return null;
      });
  }
}
