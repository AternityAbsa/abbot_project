import { Component, OnInit , ViewEncapsulation} from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Router, Params } from '@angular/router';
import { ProcessesService} from '../../services/ProcessesServices';
import 'rxjs/add/operator/map';
import { ProcessModel } from '../../models/ProcessModel';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
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
               private router : Router, private modalService: NgbModal, private fb: FormBuilder) {
                 this.createForm();
        }

  createForm(){
    this.processForm= 

  }

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

  onSubmit(){
      this.processService.createProcess(this.processForm.value);
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

  deleteProcess(processId){
    this.processService.deleteProcess(processId).subscribe(
        data => this.process_Model.splice(this.process_Model.indexOf(processId), 1));
    }

  onCancel() {
    this.showNew = false;
  }

    ngOnInit() {
    this.getAllProcesses();
    this.processForm = new FormGroup({
      processType: new FormControl(),
      name: new FormControl(),
      sharedObject: new FormControl(),
      version: new FormControl(),
      createdDate: new FormControl(),
      description: new FormControl(),
      lastModifiedDate: new FormControl(),
      runmode: new FormControl(),
      createdUserId: new FormControl(),
      lastModifiedByUserId: new FormControl()

  });
    }
}
