import { Component, OnInit } from '@angular/core';
import { UserManagementService } from '../../services/UserManagementService';
import { UserManagementModel } from '../../models/UserManagementModel';

class UserList {
  Value: string;   
  constructor(  public userId: string = '', public lastModifiedBy: string = '', public userRoleId: string = '', 
                public department: string = null, public systemUsername: string = '', Value: string,
                public passwordDuration: number, public createdBy : string ='', public LoginAttemps: number
        ) 
        {
            this.Value = Value;
            this.userId = userId;
            this.lastModifiedBy = lastModifiedBy;
            this.userRouserRoleIdle = userRole;
            this.createdBy = createdBy;
            this.department = department;
            this.systemUsername = systemUsername;
            this.passwordDuration = passwordDuration;
            this.LoginAttemps = LoginAttemps;
        }
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  userList: UserList[];

  constructor(private userService: UserManagementService, private userModel: UserManagementModel) { }

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

