import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import {Http, Headers, Response,RequestMethod, RequestOptions, RequestOptionsArgs} from '@angular/http';
import * as models from '../models/models';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { BASE_PATH, ABBOT_RESOURCE_GROUP_MANAGEMENT_API } from '../services/services';
import{ AuthService } from '../services/AuthService';
import { TreeNode } from 'primeng/primeng';
import {AbbotWorkQueueItem} from '../models/AbbotWorkQueueItem';
import {AbbotProcess} from '../models/AbbotProcess';
import {AbbotResource} from '../models/AbbotResource';
import {AbbotResourceGroup} from '../models/AbbotResourceGroup';

@Injectable()
export class ControlRoomService {

    private queryUrl: string = '?search=';
    public confirm: boolean;
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

   createQueueItem(resourceName: string, processName:string){
       return this.http.post("http://localhost:8080/abbot/abbot-work-queue-item-management/assigned/" + resourceName +'/'+ processName , {headers: this.headers})
           .subscribe(
            res => {
              console.log(res);
            },
            err => {
              console.log("Error occured");
            }
          );
     }



     searchEntries(term) {
        return this.http
            .get("http://localhost:8080/" + this.queryUrl + term,{headers: this.headers})
            .map(res => res.json());
      }

     public getAllResourceGroups(): Observable<any[]>{
        return this.http.get("http://localhost:8080/abbot/abbot-resource-group-management",{headers: this.headers})
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

  public getAllQueues(): Observable<any[]>{
        return this.http.get("http://localhost:8080/abbot/abbot-work-queue-management",{headers: this.headers})
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

    public getAllResources(): Observable<AbbotResource[]>{
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

     public getAllProcesses(): Observable<Array<AbbotProcess>>{
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


     public getAbbotResourceGroup(id:Number){

     }

    getFiles() {
        return this.http.get('/assets/files.json')
                    .toPromise()
                    .then(res => <TreeNode[]> res.json().data);
    }

     createAbbotResourceGroup(resourceGroupModel: AbbotResourceGroup){

     }

     updateAbbotResourceGroup(resourceGroupModel: AbbotResourceGroup){

     }

     deleteAbbotResourceGroup(id:number){

    }



}
