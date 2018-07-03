import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Router, NavigationEnd } from '@angular/router';
import {ProcessesService} from '../../services/ProcessesServices';
import 'rxjs/add/operator/map';
import { ProcessModel } from '../../models/ProcessModel';
import { Observable } from 'rxjs/Observable'; 
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';

class ProcessList {
    constructor(
      public processId: string = '',
      public processName: string = '',
      public description: string = '',
      public version: string = '',
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

    updateRow : boolean;
    updateIndex : number;
    process_List: ProcessList[] = [];
    process_Model: ProcessList;
    showNew: Boolean = false;
    // It will be either 'Save' or 'Update' based on operation.
    submitType: string = 'Save';
    // It maintains table row index based on selection.
    selectedRow: number;

    // Linked with ProcessesService Class
    private process : any[];


    constructor(private processService : ProcessesService, private processModel : ProcessModel, private form : FormGroup) {
       this.form = new For this.process_List.push(new ProcessList('1', 'cif search', 'A', '14h00', 'P', ''));
        this.process_List.push(new ProcessList('2', 'open fbss', 'B', '16h00', 'P', ''));
        this.process_List.push(new ProcessList('3', 'avaf application', 'NA', '11h00', 'P', ''));
        }

onNew(){
    this.process_Model = new ProcessList();
    this.submitType = 'Save';
    this.showNew = true;
}


onSave(){
    if (this.submitType === 'Save') {
        // Push registration model object into registration list.
        this.process_List.push(this.process_Model);
      } else {
        // Update the existing properties values based on model.
        this.process_List[this.selectedRow].processId = this.process_Model.processId;
        this.process_List[this.selectedRow].processName = this.process_Model.processName;
        this.process_List[this.selectedRow].status = this.process_Model.status;
        this.process_List[this.selectedRow].timestamp = this.process_Model.timestamp;
      }
      // Hide registration entry section.
      this.showNew = true;
}


 // This method associate to Edit Button.
 onEdit(process, index) {

    this.form.setV

    this.selectedRow = index;
    this.process_List[this.selectedRow].processId = this.process_Model.processId;
    this.process_List[this.selectedRow].processName = this.process_Model.processName;
    this.process_List[this.selectedRow].status = this.process_Model.status;
    this.process_List[this.selectedRow].timestamp = this.process_Model.timestamp;
    this.showNew = true;

    // this.selectedRow = index;
    // this.process_Model = new ProcessList();
    // this.process_Model = Object.assign({}, this.process_List[this.selectedRow]);
    // this.submitType = 'Update';
    // this.showNew = true;
  }

  // This method associate to Delete Button.
  onDelete(index: number) {
    // Delete the corresponding registration entry from the list.
    this.process_List.splice(index, 1);
  }

  // This method associate toCancel Button.
  onCancel() {
    // Hide registration entry section.
    this.showNew = false;
  }



/**Loading rest api service */
loadProcesses(){
    this.processService.getAbBotProcesses().subscribe(
        processes => {
        this.processModel.processId = processes['value'].map(processes => processes.processId);
        this.processModel.processName = processes['value'].map(processes => processes.processName);
        this.processModel.description = processes['value'].map(processes => processes.description);
        this.processModel.version = processes['value'].map(processes => processes.version);
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
