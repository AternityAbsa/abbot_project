import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import {Http, Headers, Response,RequestMethod, RequestOptions, RequestOptionsArgs} from '@angular/http';
import * as models from '../models/models';
import { Observable } from 'rxjs/Observable'; 
import 'rxjs/Rx';
import { AuthModel } from '../models/models';
import { ActionManagementModel } from '../models/ActionManagementModel';
import{ AuthService } from '../services/AuthService';
import { BASE_PATH, ABBOT_ACTION_MANAGEMENT_API } from '../services/services';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

@Injectable()
export class ActionManagementService {



    private headers = new Headers({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.authenticationService.getToken()
        });

        constructor(private http: Http, private authenticationService: AuthService) {}


    public auth: Array<AuthModel>;

    public applications: Array<AuthModel>;
    // public defaultHeaders: Headers = new Headers();
    // private options = new RequestOptions ({headers:this.defaultHeaders})

   
    /**
     * get AbBot Auth Service 
     *
     * @param body AbBot Auth Service to add
     */

    public getAllActions(){
        return this.http.get(BASE_PATH + ABBOT_ACTION_MANAGEMENT_API, { headers: this.headers})
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

     public createAction(action: ActionManagementModel): Observable<any[]>{
        return this.http.post(BASE_PATH + ABBOT_ACTION_MANAGEMENT_API, JSON.stringify(action),  { headers: this.headers})
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

     updateAction(action: ActionManagementModel){
        return this.http.put(BASE_PATH + ABBOT_ACTION_MANAGEMENT_API, JSON.stringify(action),  { headers: this.headers})
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

     deleteAction(id:number){
        return this.http.delete(BASE_PATH + ABBOT_ACTION_MANAGEMENT_API + id, { headers: this.headers})
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
