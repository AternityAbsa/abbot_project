import { Component, OnInit , ViewEncapsulation} from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Router, Params } from '@angular/router';
import {ProcessesService} from '../../services/ProcessesServices';
import 'rxjs/add/operator/map';
import { ProcessModel } from '../../models/ProcessModel';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder,FormGroup } from '@angular/forms'
import { Observable } from 'rxjs/Observable'; 
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { AddProcessFormComponent} from '../add-process-form/add-process-form.component';


class ProcessList {
    Value: string;   
    constructor(  public processId: string = '', public name: string = '', public description: string = '', 
    public version: string = '', public status: string = null, public runmode: number = 0, Value: string,
           public sharedObject: number = 0, public createdBy : string ='', public processType: string=''
          ) 
    {
        this.Value = Value;
        this.processId = processId;
        this.name = name;
        this.description = description;
        this.version = version;
        this.status = status;
        this.runmode = runmode;
        this.sharedObject = sharedObject;
        this.processType = processType;

    }
  }
@Component({
    selector: 'app-charts',
    templateUrl: './charts.component.html',
    styleUrls: ['./charts.component.scss'],
    animations: [routerTransition()],
    encapsulation: ViewEncapsulation.None,
    styles: [`
      .dark-modal .modal-content {
        background-color: #292b2c;
        color: white;
      }
      .dark-modal .close {
        color: white;
      }
      .light-blue-backdrop {
        background-color: #5cb3fd;
      }
    `],
})
export class ChartsComponent implements OnInit {
    processForm: FormGroup;

    Value: string;  
    updatedItem;  
    newItem: {};
    editIndex = null;
    rowDetails:Array<object>;
    editRow : boolean;
    updateIndex : number;
    process_List: ProcessList[]; 
    process_Model: ProcessList[];
    showNew: Boolean = false;
    // It will be either 'Save' or 'Update' based on operation.
    submitType: string = 'Save';
    // It maintains table row index based on selection.
    selectedRow: number;
    // Linked with ProcessesService Class
    private process : any[];


    constructor(private processService : ProcessesService, private processModel : ProcessModel,
       private router : Router, private modalService: NgbModal) {
        }

        private actions: string[] = [
          'Action 1',
          'Action 2',
          'Action 3',
          'Action 4'
         ];

         private element_types: string[] = [
          'Element 1',
          'Element 2',
          'Element 3',
          'Element 4'
         ];

  getAllProcesses(){

    this.processService.getAllProcesses()
       .subscribe(value => this.process_Model  = value);
  }

  getProcess(index: number){
  }

  createNewProcess(content){
   // Opens The Modal Form to add new Process
   this.modalService.open(content, { size: 'lg' });
  }

  onSubmit(processForm: FormGroup){
    if(processForm.value.processId == null){
      console.log(processForm.value);
      this.processService.createProcess(processForm.value);
      // this.router.navigate(['charts']);
    }
    else {
      //update when processID is present
      this.processService.updateProcess(processForm.value.processId)
      .subscribe(data => {
        this.processService.getAllProcesses();
      });
    }
  }

  updateProcess(process){
    this.processService.updateProcess(process).subscribe(
        data =>{
            //Refresh List
            this.getAllProcesses();
         },
        error => {
              console.error("Error Saving Process");
              }
    );
  }

  deleteProcess(process){
    this.processService.deleteProcess(process).subscribe(
        data => this.process_Model.splice(this.process_Model.indexOf(process), 1));
    }

  onCancel() {
    this.showNew = false;
  }

    ngOnInit() {
    this.getAllProcesses();
    }
}
