import { Component, OnInit , ViewEncapsulation} from '@angular/core';
import { routerTransition } from '../../router.animations';
import { UserManagementService } from '../../services/UserManagementService';
import { UserManagementModel, UserRole, UserPermission, UserPermissionGroup } from '../../models/UserManagementModel';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

class UserList {
  Value: string;   
  constructor(  public alertNotificationTypes: number = 0,
                public username: string = '', public systemUsername: string = '', public  useremail: string='',
                public loginAttemps: number = 0,
                public alertEventTypes: number = 0, public userRoleId: number = 0
        ) 
        {
            this.useremail = useremail;
            this.userRoleId = userRoleId;
            this.alertEventTypes = alertEventTypes;
            this.username = username;
            this.systemUsername = systemUsername;
            this.loginAttemps = loginAttemps;
            this.alertNotificationTypes = alertNotificationTypes;
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
              });
            }
          
  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers(){
    this.userService.getAllUsers().subscribe(
      data=>{
        this.userList = data;
        //console.log(this.userList);
      }
    );
  }

  createNewUser(content){
    this.modalRef  = this.modalService.open(content, { size: 'lg' });
   }

  addUser(username, systemusername, useremail, passwordDurationWeeks, password, loginattempts,authorities, 
          alertNotificationTypes, alertEventTypes, userRoleName, permissionName, permissionId,
          permissionGroupName, permissionGroupId){

          this.userPermissionGroup.id = permissionGroupId;
          this.userPermissionGroup.name = permissionGroupName;
          this.userPermission.id = permissionId;
          this.userPermission.name = permissionName;
          this.userRole.abbotPermission = this.userPermission;
          /** user role id references user role table */
          this.userRole.id = 1;
          this.userRole.name = userRoleName;
          this.userModel.abbotUserRole = this.userRole;
          this.userModel.alertEventTypes =  alertEventTypes;
          this.userModel.alertNotificationTypes = alertNotificationTypes;
          this.userModel.authorities = [authorities];
          this.userModel.loginattempts = loginattempts;
          this.userModel.password = password;
          this.userModel.passwordDurationWeeks = passwordDurationWeeks;
          this.userModel.systemusername = systemusername;
          this.userModel.useremail = useremail;
          this.userModel.username = username;
          this.userService.createUser(this.userModel).subscribe(
            data =>{
              this.getAllUsers();
    }
    );
  }

  editUser(content1){
    // Opens The Modal Form to Edit Processes
    this.modalService.open(content1, { size: 'lg' });
   }

  updateUser(username, systemusername, useremail, passwordDurationWeeks,password, loginattempts,authorities, 
             alertNotificationTypes, alertEventTypes, userRoleName, userId, permissionName, permissionId,
             permissionGroupName, permissionGroupId){

              this.userPermissionGroup.id = permissionGroupId;
              this.userPermissionGroup.name = permissionGroupName;
              this.userPermission.id = permissionId;
              this.userPermission.name = permissionName;
              this.userRole.abbotPermission = this.userPermission;
              this.userRole.id = 1;
              this.userRole.name = userRoleName;
              this.userModel.abbotUserRole = this.userRole;
              this.userModel.alertEventTypes =  alertEventTypes;
              this.userModel.alertNotificationTypes = alertNotificationTypes;
              this.userModel.authorities = [authorities];
              this.userModel.loginattempts = loginattempts;
              this.userModel.password = password;
              this.userModel.passwordDurationWeeks = passwordDurationWeeks;
              this.userModel.systemusername = systemusername;
              this.userModel.useremail = useremail;
              this.userModel.username = username;
              this.userModel.userId = userId;

              this.userService.updateUser(this.userModel).subscribe(
              data =>{
              this.getAllUsers();
         }
    );
  }

    deleteUser(userRoleId){
      console.log(userRoleId);
      this.userService.deleteUser(userRoleId).subscribe(
        data => { 
         alert('User successfully Deleted');
         this.getAllUsers();
      }, error => {
        console.log('FAILED to Delete User');
      },() =>{
        this.getAllUsers();
      });
    }
}

