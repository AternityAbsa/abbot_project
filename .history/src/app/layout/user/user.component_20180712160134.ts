import { Component, OnInit } from '@angular/core';
import { UserManagementService } from '../../services/UserManagementService';
import { UserManagementModel } from '../../models/UserManagementModel';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

class UserList {
  Value: string;   
  constructor(  public userId: number=0, public lastModifiedBy: string = '', public userRoleId: number=0, 
                public username: string = '', public systemUsername: string = '', Value: string,
                public passwordDuration: number=0, public createdBy : string ='', public loginAttemps: number=0
        ) 
        {
            this.Value = Value;

            this.userId = userId;
            this.lastModifiedBy = lastModifiedBy;
            this.createdBy = createdBy;
            this.username = username;
            this.systemUsername = systemUsername;
            this.loginAttemps = loginAttemps;

        }
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  userForm: FormGroup;
  modalRef: NgbModalRef;
  userList: UserList[];

  constructor( private userService: UserManagementService, private userModel: UserManagementModel, private modalService: NgbModal,
               private fb: FormBuilder) { }

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers(){
    this.userService.getAllUsers().subscribe(
      data=>{
        this.userList = data;
        console.log(this.userList);
      }
    );
  }
}

