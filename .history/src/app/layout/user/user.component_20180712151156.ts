import { Component, OnInit } from '@angular/core';
import { UserManagementService } from '../../services/UserManagementService';
import { UserManagementModel } from '../../models/UserManagementModel';

class UserList {
  Value: string;   
  constructor(  public processId: string = '', public name: string = '', public description: string = '', 
                public version: string = '', public status: string = null, public runmode: number = 0, Value: string,
                public sharedObject: number = 0, public createdBy : string ='', public processType: string=''
        ) 
  {
      this.Value = Value;
      this.processId = processId;
      this.name = name;
      this.description = description;
      this.version = version;
      this.status = status;
      this.runmode = runmode;
      this.sharedObject = sharedObject;
      this.processType = processType;
  }
}
@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss'],
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
        this.userL
        console.log(data);
      }
    );
  }
}

