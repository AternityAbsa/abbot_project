import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import {Http, Headers, Response,RequestMethod, RequestOptions, RequestOptionsArgs} from '@angular/http';
import * as models from '../models/models';
import { Observable } from 'rxjs/Observable'; 
import 'rxjs/Rx';
import { ProcessModel } from '../models/models';
import { SampleTest } from '../models/SampleTest';


@Injectable()
export class ProcessesService {

    private process_rest_api = '/';
    private process_basepath = "/";

    public processes: Array<ProcessModel>;

    public applications: Array<ProcessModel>;
    public blueprism : models.ProcessModel[];
    public blueprismRobots: Array<models.ProcessModel>;
    public defaultHeaders: Headers = new Headers();

    bdp : String;

    constructor(private http: Http) {}

    /**
     * get AbBot Processes 
     *
     * @param body AbBot Processes to add
     */

     public getAbBotProcesses(): Observable<SampleTest[]>{
        return this.http.get(this.process_basepath + this.process_rest_api)
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

   

        /*.map(res => {
            this.blueprism = res.json();
            console.log(this.blueprism);  
            return res.json();
        }) **/
    }



    /**
     * Add a new Applications
     *
     * @param body Application to add
     */
    public addApplicationsWithHttpInfo(body: models.ProcessModel, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/HOST_RESOURCES_HOURLY';

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

        /*public getBusinessAreas(extraHttpRequestParams?: any): Observable<Array<models.BusinessArea>> {
            return this.getBusinessAreasWithHttpInfo(extraHttpRequestParams)
                .map((response: Response) => {
                     if (response.status === 204) {
                        return undefined;
                    } else if (response.status === 500) {
                        return null;
                    }else {
                        return response.json();
                    }
                });
        } **/


       /* .subscribe(res => {
            this.blueprism = res.json();
            console.log(this.blueprism);
            return this.blueprism; 
        }); **/
    
       
       private handleError(error: Response){

        return Observable.throw (error.statusText);
        
       }
}
