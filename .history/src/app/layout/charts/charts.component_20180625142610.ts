import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Router, NavigationEnd } from '@angular/router';
import {ProcessesService} from '../../services/ProcessesServices';
import 'rxjs/add/operator/map';
import { ProcessModel } from '../../models/ProcessModel';
import { Observable } from 'rxjs/Observable'; 
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

class ProcessList {
    constructor(
      public processId: string = '',
      public processName: string = '',
      public status: string = null,
      public timestamp: string = ''
    ) {}
  }

@Component({
    selector: 'app-charts',
    templateUrl: './charts.component.html',
    styleUrls: ['./charts.component.scss'],
    animations: [routerTransition()]
})
export class ChartsComponent implements OnInit {

    process_List: ProcessList[] = [];
    process_Model: ProcessList;
    showNew: Boolean = false;
    // It will be either 'Save' or 'Update' based on operation.
    submitType: string = 'Save';
    // It maintains table row index based on selection.
    selectedRow: number;

    // Linked with ProcessesService Class
    private process : any[];


    constructor(private processService : ProcessesService, private processModel : ProcessModel) {
        this.process_List.push(new ProcessList('1', 'cif search', 'A', '14h00'));
        this.process_List.push(new ProcessList('2', 'open fbss', 'B', '16h00'));
        this.process_List.push(new ProcessList('3', 'avaf application', 'NA', '11h00'));
        }

onNew(){
    this.process_Model = new ProcessList();
    this.submitType = 'Save';
    this.showNew = true;
}


on Save(){
    
}



        /**Loading rest api service */
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
