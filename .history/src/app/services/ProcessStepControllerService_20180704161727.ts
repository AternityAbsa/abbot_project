import { Injectable } from '@angular/core';
import {  HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import {Http, Headers, Response} from '@angular/http';
import * as models from '../models/models';
import { Observable } from 'rxjs/Observable'; 
import 'rxjs/Rx';
import { AuthModel } from '../models/models';
import { AuthService } from '../services/AuthService';
import {'../services/services';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

@Injectable()
export class ProcessStepControllerService {


    private ABBOT_PROCESS_STEP_URL;
    private BASE_URL = 'http://localhost:8080';


    private headers = new Headers({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.authenticationService.getToken()
        });

        constructor(private http: Http, private authenticationService: AuthService,) {}



    public auth: Array<AuthModel>;

    public applications: Array<AuthModel>;
    // public defaultHeaders: Headers = new Headers();
    // private options = new RequestOptions ({headers:this.defaultHeaders})

   
    /**
     * get AbBot Auth Service 
     *
     * @param body AbBot Auth Service to add
     */

    public getAllProcessSteps(){
        return this.http.get(this.BASE_URL + this.ABBOT_PROCESS_STEP_URL, { headers: this.headers})
        .map((response: Response) => {
            if (response.status === 204) {
                return undefined;
            } else if (response.status === 500) {
                return null;
            }else {
                console.log(response.json());
                return response.json();      
            }
        });  
     }

     public createProcessStep(): Observable<any[]>{
        return this.http.post(this.BASE_URL + this.ABBOT_PROCESS_STEP_URL,{ headers: this.headers})
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

     updateProcess(){
        return this.http.put(this.BASE_URL + this.ABBOT_PROCESS_STEP_URL,{ headers: this.headers})
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
    
    private extractData(res: Response) {
        let body = res.json() as models.ProcessModel[];
        console.log(body); 
        return body || { }; 
    } 
       
       private handleError(error: Response){

        return Observable.throw (error.statusText);
        
       }
}
