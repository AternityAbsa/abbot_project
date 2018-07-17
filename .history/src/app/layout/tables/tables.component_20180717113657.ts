import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { CredentialsManagerModel } from '../../models/CredentialsManagerModel';
import { CredentialsManagerService } from '../../services/CredentialsManagerService';

class CredentialsList {
    Value: string;   
    constructor(  public description: string = '',
                  public login: string = '', public name: string = '', public  password: string='',
                  public invalid: number = 0,
                  public id: number = 0
          ) 
          {
              this.description = description;
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
        private fb: FormBuilder) { 
        this.createForm();
        }
        createForm(){
             this.credentialsForm = this.fb.group({
             id:['', Validators.required],
             description:['', Validators.required],
             invalid:['', Validators.required],
             login:['', Validators.required],
             name:['', Validators.required],
             password:['', Validators.required]

       }); 
    }

    ngOnInit() {
        this.getAllCredentials();
    }

    getAllCredentials(){
        this.credentialsService.getAllCredentials().subscribe(
            data=>{
              //this.credList = data;
              console.log(data);
            }
          );
    }

    manageCredentials(content){
        this.modalRef  = this.modalService.open(content, { size: 'lg' });
       }
    
       createCredential(description, password, name, login, invalid){
    
              this.credentialsModel.description = description;
              this.credentialsModel.invalid = invalid;
              this.credentialsModel.login = login;
              this.credentialsModel.name = name;
              this.credentialsModel.password = password;
              this.crede
              this.credentialsService.createCredentials(this.credentialsModel).subscribe(
                data =>{
                  this.getAllCredentials();
        }
        );
      }
    


    
}
