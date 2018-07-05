import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import {ProcessesService} from '../../services/ProcessesServices';
import 'rxjs/add/operator/map';
import { ProcessModel } from '../../models/ProcessModel';

class ProcessList {
    constructor(
      public processId: string = '',
      public processName: string = '',
      public status: string = null,
      public timestamp: string = '',
      public userId: string = '',
      public username: string = ''
    ) {}
  }

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss'],
    animations: [routerTransition()]
})
export class FormComponent implements OnInit {

    //use actionName from ProcessModel to populate list of steps from DB.
    private actions: string[] = [
        'open app',
        'enter text',
        'submit',
        'edit text',
        'open file'
    ];

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
        this.process_List.push(new ProcessList('1', 'cif search', 'A', '14h00', 'abmg101', 'test01'));
        }

onNew(){
    this.process_Model = new ProcessList();
    this.submitType = 'Save';
    this.showNew = true;
}

onAdd(){
  this.router.navigate(['/charts']);

    //if (this.submitType === 'Save') {
        // Push registration model object into registration list.
       // this.process_List.push(this.process_Model);
     // } else {
        // Update the existing properties values based on model.
      //   this.process_List[this.selectedRow].processId = this.process_Model.processId;
      //   this.process_List[this.selectedRow].processName = this.process_Model.processName;
      //   this.process_List[this.selectedRow].status = this.process_Model.status;
      //   this.process_List[this.selectedRow].timestamp = this.process_Model.timestamp;
      // }
      // Hide registration entry section.
      //this.showNew = false;
}

 // This method associate to Edit Button.
 onEdit(index: number) {
    // Assign selected table row index.
    this.selectedRow = index;
    // Initiate new registration.
    this.process_Model = new ProcessList();
    // Retrieve selected registration from list and assign to model.
    this.process_Model = Object.assign({}, this.process_List[this.selectedRow]);
    // Change submitType to Update.
    this.submitType = 'Update';
    // Display registration entry section.
    this.showNew = false;
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

    ngOnInit() {}
}
