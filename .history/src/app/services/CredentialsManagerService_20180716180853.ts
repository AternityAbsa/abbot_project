import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Http, Headers, Response} from '@angular/http';
import * as models from '../models/models';
import { Observable } from 'rxjs/Observable'; 
import 'rxjs/Rx';
import { AuthModel } from '../models/models';
import { CredentialsManagerModel } from '../models/CredentialsManagerModel';
import{ AuthService } from '../services/AuthService';
import { BASE_PATH, ABBOT_CREDENTIALS_MANAGEMENT_API } from '../services/services';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

@Injectable()
export class CredentialsManagerService {

    /**
     * get AbBot Auth Service 
     *
     */


    private headers = new Headers({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.authenticationService.getToken()
        });

        constructor(private http: Http, private authenticationService: AuthService) {}


    public auth: Array<AuthModel>;

    public applications: Array<AuthModel>;

    
    public getAllCredentials(){
        return this.http.get(BASE_PATH + ABBOT_CREDENTIALS_MANAGEMENT_API)
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

     public createCredentials(credentialsModel: CredentialsManagerModel){
        return this.http.post(BASE_PATH + ABBOT_CREDENTIALS_MANAGEMENT_API, JSON.stringify(credentialsModel),  { headers: this.headers})
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

     updateCredentials(credentialsModel: CredentialsManagerModel){
        return this.http.put(BASE_PATH + ABBOT_CREDENTIALS_MANAGEMENT_API, JSON.stringify(credentialsModel), { headers: this.headers})
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

     deleteCredential(id: number){
         console.log(id);
        return this.http.delete(BASE_PATH + ABBOT_CREDENTIALS_MANAGEMENT_API + id, { headers: this.headers})
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
