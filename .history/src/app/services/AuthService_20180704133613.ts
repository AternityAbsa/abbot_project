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


  constructor(private http: HttpClient) {
  }

  private base_url = 'http://localhost:8080';
  private user_rest_api = '/abbot/user-management';

  public getAllUsers(): Observable {
    return this.http.get(this.base_url + this.user_rest_api);
  }

  public createUser(user: UserManagementModel): Observable<any[]>{
    return this.http.post(this.user_management_basepath + this.user_management_rest_api, JSON.stringify(user), this.options)
    .map((response: Response) => {
        if (response.status === 204) {
            return undefined;
        } else if (response.status === 500) {
            return null;
        }else {
           
            return response.json();      
        }
    });  
 }

 updateProcess(user: UserManagementModel){
    return this.http.put(this.user_management_basepath + this.user_management_rest_api, JSON.stringify(user), this.options)
    .map((response: Response) => {
        if (response.status === 204) {
            return undefined;
        } else if (response.status === 500) {
            return null;
        }else {
           
            return response.json();      
        }
    }) 
    .catch(this.handleError);
 }

/**
 * Add a new Applications
 *
 * @param body Application to add
 */
public addApplicationsWithHttpInfo(body: models.AuthModel, extraHttpRequestParams?: any): Observable<Response> {
    const path = this.user_management_basepath + '/';

    let queryParameters = new URLSearchParams();
    let headers = new Headers(this.defaultHeaders.toJSON()); 
    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
        throw new Error('Required parameter body was null or undefined when calling addApplications.');
    }

    headers.set('Content-Type', 'application/json');

    let requestOptions: RequestOptionsArgs = new RequestOptions({
        method: RequestMethod.Post,
        headers: headers,
        body: body, 
        search: queryParameters
    });

    
    if (extraHttpRequestParams) {
        requestOptions = this.extendObj(requestOptions, extraHttpRequestParams);
    }

    return this.http.request(path, requestOptions);
}

/**
 *
 * Extends object by coping non-existing properties.
 * @param objA object to be extended
 * @param objB source object
 */
private extendObj<T1, T2>(objA: T1, objB: T2) {
    for (let key in objB){
        if (objB.hasOwnProperty(key)){
            (objA as any)[key] = (objB as any)[key];
        }
    }
    return <T1&T2>objA;
}

private extractData(res: Response) {
    let body = res.json() as models.ProcessModel[];
    console.log(body); 
    return body || { }; 
} 
   
   private handleError(error: Response){

    return Observable.throw (error.statusText);
    
   }



  // login(username: string, password: string) {
  //   const body = `username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}&grant_type=password`;

  //   const headers = new Headers();
  //   headers.append('Content-Type', 'application/x-www-form-urlencoded');
  //   headers.append('Authorization', 'Basic ' + btoa(TOKEN_AUTH_USERNAME + ':' + TOKEN_AUTH_PASSWORD));

  //   return this.http.post(AuthService.AUTH_TOKEN, body, {headers})
  //     .map(res => res.json())
  //     .map((res: any) => {
  //       if (res.access_token) {
  //           console.log(res.access_token);
  //         return res.access_token;
  //       }
  //       return null;
  //     });
  // }
}
