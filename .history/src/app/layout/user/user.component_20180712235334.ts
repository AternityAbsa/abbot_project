import { Component, OnInit , ViewEncapsulation} from '@angular/core';
import { routerTransition } from '../../router.animations';
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
  styleUrls: ['./user.component.scss'],
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
export class UserComponent implements OnInit {
  userForm: FormGroup;
  modalRef: NgbModalRef;
  userList: UserList[];

  constructor( private userService: UserManagementService, private userModel: UserManagementModel, private modalService: NgbModal,
               private fb: FormBuilder) { 
                 this.createForm();
               }

               createForm(){
                this.userForm = this.fb.group({
                  lastModifiedBy:['', Validators.required],
                  createdBy:['', Validators.required],
                  username:['', Validators.required],
                  systemUsername:['', Validators.required],
                  lastModifiedByUserId:['', Validators.required],
                  loginAttemps:['', Validators.required],
                  userId:['', Validators.required]
              });
            }
          

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

  createNewUser(content){
    this.modalRef  = this.modalService.open(content, { size: 'lg' });
   }

  AddUser(username, userRoleId,systemUsername, departmentId){
    console.log(username,userRoleId );
    this.userModel.username = username;
    this.userModel.userRoleId = userRoleId;
    this.userModel.departmentId = departmentId;
    this.userModel.systemUsername = systemUsername;

    this.userService.createUser(this.userModel).subscribe(
      data =>{
        this.getAllUsers();
    }
    );
  }

  updateUser(username, userRoleId,systemUsername, departmentId){
    this.userModel.username = username;
    this.userModel.userRoleId = userRoleId;
    this.userModel.systemUsername = 

    this.userService.updateUser(this.userModel).subscribe(
      data =>{
        this.getAllUsers();
    }
    );
  }

    deleteUser(userId){
      this.userService.deleteUser(userId).subscribe(
        data => { 
         alert('Process successfully Deleted');
         this.getAllUsers();
      }, error => {
        console.log('FAILED to Delete User');
      },() =>{
        this.getAllUsers();
      });

    }


}

