import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ActionManagementModel } from '../../models/ActionManagementModel';
import { ActionManagementService } from '../../services/ActionManagementService';

class ActionList {
  Value: string;   
  constructor(  public name: string = '',
                public id: number = 0
        ) 
        {
            this.name = name;
            this.id = id;
        }
}

@Component({
  selector: 'app-action-management',
  templateUrl: './action-management.component.html',
  styleUrls: ['./action-management.component.scss'],
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

export class ActionManagementComponent implements OnInit {

    actionForm: FormGroup;
    modalRef: NgbModalRef;
    actionList: ActionList[];

    constructor( private actionService: ActionManagementService, private actionModel: ActionManagementModel, private modalService: NgbModal,
        private fb: FormBuilder) { 
        this.createForm();
        }
        createForm(){
             this.actionForm = this.fb.group({
             id:['', Validators.required],
             name:['', Validators.required]
       }); 
      }

  ngOnInit() {
    this.getAllActions();
  }

  getAllActions(){
    this.actionService.getAllActions().subscribe(
        data=>{
          console.log(data);
          this.actionList = data;
        }
      );
}

 openAction(content){
        this.modalRef  = this.modalService.open(content, { size: 'lg' });
  }

  createAction(name, id){

        this.actionModel.name = name;
        this.actionModel.id = id;
       
        this.actionService.createAction(this.actionModel).subscribe(
          data =>{
            this.getAllActions();
  }
  );
}

editAction(content1){
// Opens The Modal Form to Edit Action
this.modalService.open(content1, { size: 'lg' });
}

updateAction(name, id){
        
        this.actionModel.name = name;
        this.actionModel.id = id;
      
        this.actionService.updateAction(this.actionModel).subscribe(
        data =>{
            this.getAllActions();
    });
}

deleteAction(id){
  this.actionService.deleteAction(id).subscribe(
    data => { 
     alert('Action successfully Deleted');
     this.getAllActions();
  }, error => {
    console.log('FAILED to Delete Action');
  },() =>{
    this.getAllActions();
  });
}

}
