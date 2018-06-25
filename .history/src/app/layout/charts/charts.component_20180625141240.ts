import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Router, NavigationEnd } from '@angular/router';
import {ProcessesService} from '../../services/ProcessesServices';
import 'rxjs/add/operator/map';
import { ProcessModel } from '../../models/ProcessModel';
import { Observable } from 'rxjs/Observable'; 
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-charts',
    templateUrl: './charts.component.html',
    styleUrls: ['./charts.component.scss'],
    animations: [routerTransition()]
})
export class ChartsComponent implements OnInit {

    private process : any[];


    constructor(private processService : ProcessesService, private processModel : ProcessModel, public dob: NgbDateStruct = null,) {
        }

        loadProcesses(){
            this.processService.getAbBotProcesses().subscribe(
                processes => {
                this.processModel.processId = processes['value'].map(processes => processes.processId);
                this.processModel.processName = processes['value'].map(processes => processes.processName);
                this.processModel.processStatus = processes['value'].map(processes => processes.processStatus);
                this.process = processes;
            
            },
        );
        err => {
            console.log(err);
          }

          return this.process;
        }
    

    ngOnInit() {}
}
