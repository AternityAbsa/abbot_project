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


  private base_url = 'http://localhost:8080/abbot/authenticate';


  private authUrl = 'http://localhost:8080/auth';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) {
  }

  getToken(): String {
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    var token = currentUser && currentUser.token;
    return token ? token : "";
  }

  login(username: string, password: string): Observable<boolean> {
    return this.http.post(this.authUrl, JSON.stringify({username: username, password: password}), {headers: this.headers})
        .map((response: Response) => {
            // login successful if there's a jwt token in the response
            let token = response.json() && response.json().token;
            if (token) {
                // store username and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));

                // return true to indicate successful login
                return true;
            } else {
                // return false to indicate failed login
                return false;
            }
        }).catch((error:any) => Observable.throw(error.json().error || 'Server error'));
}


logout(): void {
  // clear token remove user from local storage to log user out
  localStorage.removeItem('currentUser');
}
}
