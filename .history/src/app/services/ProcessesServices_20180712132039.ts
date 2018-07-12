import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import {Http, Headers, Response,RequestMethod, RequestOptions, RequestOptionsArgs} from '@angular/http';
import * as models from '../models/models';
import { Observable } from 'rxjs/Observable'; 
import 'rxjs/Rx';
import { ProcessModel } from '../models/models';
import { AuthService } from '../services/AuthService';
import { BASE_PATH, ABBOT_PROCESS_MANAGEMENT_API } from '../services/services';


@Injectable()
export class ProcessesService {

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

     public getAllProcesses(){
      //  this.headers.append("X-Total-Count", "500");
        return this.http.get(BASE_PATH + ABBOT_PROCESS_MANAGEMENT_API,{ headers: this.headers})
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
        return this.http.get(BASE_PATH + ABBOT_PROCESS_MANAGEMENT_API +"/"+ id, { headers: this.headers})
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
         console.log(process);
        return this.http.post(BASE_PATH + ABBOT_PROCESS_MANAGEMENT_API, JSON.stringify(process), { headers: this.headers})
        .map((response: Response) => {
            if (response.status === 204) {
                return undefined;
            } else if (response.status === 500) {
                return null;
            }else {
                console.log(response.json());
                return response.json();      
            }
        }) 
        .catch(this.handleError);
     }

     updateProcess(process: ProcessModel){
        return this.http.put(BASE_PATH + ABBOT_PROCESS_MANAGEMENT_API, JSON.stringify(process), { headers: this.headers})
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

     deleteProcess(processId: number){
         console.log(processId);
        return this.http.delete(BASE_PATH + "/abbot/abbot-process-management" + processId, { headers: this.headers})
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
