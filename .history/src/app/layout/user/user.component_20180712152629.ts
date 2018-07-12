import { Component, OnInit } from '@angular/core';
import { UserManagementService } from '../../services/UserManagementService';
import { UserManagementModel } from '../../models/UserManagementModel';

class UserList {
  Value: string;   
  constructor(  public userId: string = '', public lastModifiedBy: string = '', public userRole: string = '', 
                public version: string = '', public department: string = null, public systemUsername: number = 0, Value: string,
                public passwordDuration: number = 0, public createdBy : string ='', public LoginAttemps: string=''
        ) 
        {
            this.Value = Value;
            this.userId = userId;
            this.lastModifiedBy = lastModifiedBy;
            this.userRole = userRole;
            this.createdBy = createdBy;
            this.department = department;
            this.systemUsername = systemUsername;
            this.passwordDuration = passwordDuration;
            this.LoginAttemps = LoginAttemps;

            <th scope="row">{{ i + 1 }}</th>
            <td>{{user.userId}}</td>
            <td>{{user.createdBy}}</td>
            <td>{{user.lastModifiedBy}}</td>
            <td>{{user.userRole}}</td>
            <td>{{user.department}}</td>
            <td>{{user.passwordDuration}}</td>
            <td>{{user.systemUsername}}</td>
            <td>{{user.LoginAttemps}}</td>
        }
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  userList: any[];

  constructor(private userService: UserManagementService, private userModel: UserManagementModel) { }

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers(){
    this.userService.getAllUsers().subscribe(
      data=>{
        this.userModel = data;
        this.userList = data;
        console.log(data);
      }
    );
  }
}

