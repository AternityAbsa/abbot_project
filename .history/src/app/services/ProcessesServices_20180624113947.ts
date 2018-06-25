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

    private host_resources_api = '/HOST_RESOURCES_HOURLY?$filter=(SERVING_DEVICE_TYPE%20eq%20%27Virtual%20App%20Server%27)&$top=7';
    private device_inventory_api = '/DEVICE_INVENTORY?$filter=(DEVICE_TYPE%20eq%20%27Virtual%20App%20Server%27)&$top=4';
    private application_raw_api = '/APPLICATIONS_RAW?$top=7';
    private bdp_api = '/APPLICATIONS_RAW?$filter=(APPLICATION%20eq%20%27ABSA%20BDP%27)&$top=7';
    private aziwe_api = '/APPLICATIONS_RAW?$filter=(APPLICATION%20eq%20%27AZIWE%27)&$top=7';
    private absa_e91 = '/APPLICATIONS_RAW?$filter=(APPLICATION%20eq%20%27ABSA%20e91%27)&$top=7';
    private all_activities_api = '/ALL_ACTIVITIES';
    private best_worst_users_api ='/BUSINESS_ACTIVITIES_RAW?$top=5';
    protected basePath = "/odata/aternity.odata";
   
    public processes: Array<ProcessModel>;

    public applications: Array<ProcessModel>;
    public blueprism : models.ProcessModel[];
    public blueprismRobots: Array<models.ProcessModel>;
    public defaultHeaders: Headers = new Headers();

    bdp : String;

    constructor(private http: Http) {}

    /**
     * get Blueprism 
     *
     * @param body Blueprism to add
     */

     

    public bestAndWorstUsersData(): Observable<SampleTest[]>{
        /*return this.http.get<SampleTest[]>(this.basePath + this.best_worst_users_api); **/
        return this.http.get(this.basePath + this.best_worst_users_api)
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

    public applicationRawData(): Observable<any[]>{
        return this.http.get(this.basePath + this.application_raw_api)
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

     public bdpRawData(): Observable<any[]>{
        return this.http.get(this.basePath + this.bdp_api)
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

     public aziweRawData(): Observable<any[]>{
        return this.http.get(this.basePath + this.aziwe_api)
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

     public absa_e91RawData(): Observable<any[]>{
        return this.http.get(this.basePath + this.absa_e91)
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

     public deviceInventoryData(): Observable<any[]>{
        return this.http.get(this.basePath + this.device_inventory_api)
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

     
    public getBlueprismData(): Observable<any[]>{
        /*return this.addApplicationsWithHttpInfo(extraHttpRequestParams)
        .map((response: Response) => {
            if (response.status === 204) {
               return undefined;
           } else if (response.status === 500) {
               return null;
           }else {
               return response.json();
           }
       }); **/

       /** HOST_RESOURCES_HOURLY?$filter=(SERVING_DEVICE_TYPE%20eq%20%27Virtual%20App%20Server%27)&relative_time(last_48_hours)&$top=10
        *  --this URL: measures data for last 24 hours for blueprism servers
        */
       return this.http.get(this.basePath + this.host_resources_api)
       .map((response: Response) => {
        if (response.status === 204) {
            return undefined;
        } else if (response.status === 500) {
            return null;
        }else {
            return response.json();
        }
    });

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
