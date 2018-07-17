import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { CredentialsManagerModel, } from '../../models/CredentialsManagerModel';
import { CredentialsManagerService, EncryptId } from '../../services/CredentialsManagerService';

class CredentialsList {
    Value: string;   
    constructor(  public description: string = '',
                  public login: string = '', public name: string = '', public  password: string='',
                  public invalid: number = 0,
                  public id: number = 0
          ) 
          {
              this.id = id;
              this.invalid = invalid;
              this.login = login;
              this.name = name;
              this.password = password;
            
          }
  }

@Component({
    selector: 'app-tables',
    templateUrl: './tables.component.html',
    styleUrls: ['./tables.component.scss'],
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
export class TablesComponent implements OnInit {
    credentialsForm: FormGroup;
    modalRef: NgbModalRef;
    credList: CredentialsList[];
    constructor( private credentialsService: CredentialsManagerService, private credentialsModel: CredentialsManagerModel, private modalService: NgbModal,
        private fb: FormBuilder, private userRole: UserRole, private userPermission: UserPermission, 
        private userPermissionGroup: UserPermissionGroup) { 
        this.createForm();
        }
        createForm(){
             this.userForm = this.fb.group({
             abbotUserRole:['', Validators.required],

             alertEventTypes:['', Validators.required],
             alertNotificationTypes:['', Validators.required],
             loginattempts:['', Validators.required],
             password:['', Validators.required],
             systemusername:['', Validators.required],

             useremail:['', Validators.required],
             username:['', Validators.required],

             abbotPermission:['', Validators.required],
             abbotPermissionGroup:['', Validators.required]
       });) {}

    ngOnInit() {

    }

    
}
