import { Component, OnInit } from '@angular/core';
import { UserManagementService } from '../../services/UserManagementService';
import { UserManagementModel } from '../../models/UserManagementModel';

class UserList {
  Value: string;   
  constructor(  public userId: string = '', public lastModifiedBy: string = '', public description: string = '', 
                public version: string = '', public status: string = null, public runmode: number = 0, Value: string,
                public sharedObject: number = 0, public createdBy : string ='', public processType: string=''
        ) 
        {
            this.Value = Value;
            this.userId = userId;
            this.lastModifiedBy = lastModifiedBy;
            this.userRole = userRole;
            this.createdBy = createdBy;
            this.status = status;
            this.runmode = runmode;
            this.sharedObject = sharedObject;
            this.processType = processType;

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

