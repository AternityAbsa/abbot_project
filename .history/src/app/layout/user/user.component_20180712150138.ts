import { Component, OnInit } from '@angular/core';
import { UserManagementService } from '../../services/UserManagementService';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private userService: UserManagementService, private userModel: UserManagementModel) { }

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers(){
  constructor(private userService: UserManagementService, private userModel: UserManagementModel) { }
  this.user.getAllUsers().subscribe(
      data=>{
        this.user = data;
        console.log(data);
      }
    );
  }
}

