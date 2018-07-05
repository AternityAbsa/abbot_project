import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import {Http, Headers, Response,RequestMethod, RequestOptions, RequestOptionsArgs} from '@angular/http';
import * as models from '../models/models';
import { Observable } from 'rxjs/Observable'; 
import 'rxjs/Rx';
import { AuthModel } from '../models/models';
import { UserManagementModel } from '../models/UserManagementModel';

@Injectable()
export class UserManagementService {

    private user_management_rest_api = '/';
    private user_management_basepath = "/";

    public auth: Array<AuthModel>;

    public applications: Array<AuthModel>;
    public defaultHeaders: Headers = new Headers();
    private options = new RequestOptions ({headers:this.defaultHeaders})

    constructor(private http: Http) {}

    /**
     * get AbBot Auth Service 
     *
     * @param body AbBot Auth Service to add
     */

    public getAllUsers(): Observable<any[]>{
        return this.http.get(this.user_management_basepath + this.user_management_rest_api)
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

     updateProcess(process: UserManagementModel){
        return this.http.put(this.process_basepath +'/processes', JSON.stringify(process), this.options)
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
}
