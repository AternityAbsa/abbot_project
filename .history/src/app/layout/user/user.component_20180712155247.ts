import { Component, OnInit } from '@angular/core';
import { UserManagementService } from '../../services/UserManagementService';
import { UserManagementModel } from '../../models/UserManagementModel';

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
            //this.userRoleId = userRoleId;
            this.createdBy = createdBy;
            this.username = username;
            this.systemUsername = systemUsername;
            this.loginAttemps = loginAttemps;

            <td>{{user.userId}}</td>
                            <td>{{user.createdBy}}</td>
                            <td>{{user.lastModifiedBy}}</td>
                            <td>{{user.username}}</td>
                            <td>{{user.systemUsername}}</td>
                            <td>{{user.loginAttemps}}</td>
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

