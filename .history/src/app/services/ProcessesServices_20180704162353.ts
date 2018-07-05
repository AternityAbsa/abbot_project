import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import {Http, Headers, Response,RequestMethod, RequestOptions, RequestOptionsArgs} from '@angular/http';
import * as models from '../models/models';
import { Observable } from 'rxjs/Observable'; 
import 'rxjs/Rx';
import { ProcessModel } from '../models/models';
import{ AuthService } from '../services/AuthService';
import { BASE_PATH, ABBOT_PROCES_API } from '../services/services';


@Injectable()
export class ProcessesService {

    private process_rest_api = '/abbot/abbot-process-management';
    private process_basepath = 'http://localhost:8080';

    public processes: Array<ProcessModel>;
    private process: ProcessModel;

    public applications: Array<ProcessModel>;
    private headers = new Headers({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.authenticationService.getToken()
        });

        constructor(private http: Http, private authenticationService: AuthService) {}


    /**
     * get AbBot Processes 
     *
     * @param body AbBot Processes to add
     */

     public getAllProcesses(): Observable<any[]>{
        return this.http.get(this.process_basepath + this.process_rest_api,{ headers: this.headers})
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

     public getProcess(id:Number){
        return this.http.get(this.process_basepath + this.process_rest_api + id, { headers: this.headers})
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


     createProcess(process: ProcessModel){
        return this.http.post(this.process_basepath + this.process_rest_api, JSON.stringify(process), { headers: this.headers})
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

     updateProcess(process: ProcessModel){
        return this.http.put(this.process_basepath + this.process_rest_api, JSON.stringify(process), { headers: this.headers})
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

     deleteProcess(id:number){
        return this.http.delete(this.process_basepath + this.process_rest_api + id, { headers: this.headers})
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

       setter(process: ProcessModel){
           this.process = process;
       }

       gettter(){
           return this.process;
       }
}
