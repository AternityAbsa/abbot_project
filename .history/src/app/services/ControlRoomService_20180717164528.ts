import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import {Http, Headers, Response,RequestMethod, RequestOptions, RequestOptionsArgs} from '@angular/http';
import * as models from '../models/models';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { ResourceGroupModel } from '../models/ResourceGroupModel';
import { BASE_PATH, ABBOT_RESOURCE_GROUP_MANAGEMENT_API } '../services/services';
import{ AuthService } from '../services/AuthService';
import { TreeNode } from 'primeng/primeng';

@Injectable()
export class ControlRoomService {

    private queryUrl: string = '?search=';
    private headers = new Headers({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + this.authenticationService.getToken()
    });
    constructor(private http: Http, private authenticationService: AuthService) {}

     search(terms: Observable<string>) {
         return terms.debounceTime(400)
         .distinctUntilChanged()
         .switchMap(term => this.searchEntries(term));
      }

     searchEntries(term) {
        return this.http
            .get("http://localhost:8080/" + this.queryUrl + term)
            .map(res => res.json());
      }

     public getAllResourceGroups(): Observable<any[]>{
        return this.http.get(BASE_PATH +,{headers: this.headers})
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

  public getAllQueueItems(): Observable<any[]>{
        return this.http.get("http://localhost:8080/abbot/abbot-work-queue-item-management",{headers: this.headers})
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

    public getAllResources(): Observable<any[]>{
        return this.http.get("http://localhost:8080/abbot/abbot-resource-management",{headers: this.headers})
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

     public getAllProcesses(): Observable<any[]>{
            return this.http.get("http://localhost:8080/abbot/abbot-process-management",{headers: this.headers})
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


     public getResourceGroupModel(id:Number){

     }

    getFiles() {
        return this.http.get('/assets/files.json')
                    .toPromise()
                    .then(res => <TreeNode[]> res.json().data);
    }

     createResourceGroupModel(resourceGroupModel: ResourceGroupModel){

     }

     updateResourceGroupModel(resourceGroupModel: ResourceGroupModel){

     }

     deleteResourceGroupModel(id:number){

    }



}
