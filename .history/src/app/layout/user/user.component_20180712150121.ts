import { Component, OnInit } from '@angular/core';
import { UserManagementService } from '../../services/UserManagementService';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private user: UserManagementService, private userMOdel: User) { }

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers(){
    this.user.getAllUsers().subscribe(
      data=>{
        this.user = data;
        console.log(data);
      }
    );
  }
}

