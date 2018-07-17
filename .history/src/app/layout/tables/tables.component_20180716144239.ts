import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

class CredentialsList {
    Value: string;   
    constructor(  public description: string = '',
                  public login: string = '', public name: string = '', public  password: string='',
                  public invalid: number = 0,
                  public id: number = 0
          ) 
          {
              this.id = useremail;
              this.userRoleId = userRoleId;
              this.alertEventTypes = alertEventTypes;
              this.username = username;
              this.systemUsername = systemUsername;
              this.loginAttemps = loginAttemps;
              this.alertNotificationTypes = alertNotificationTypes;

              description: string;
    expiryDate: Date;
    id: number;
    invalid: number;
    login: string;
    name: string;
    password: string;
          }
  }


@Component({
    selector: 'app-tables',
    templateUrl: './tables.component.html',
    styleUrls: ['./tables.component.scss'],
    animations: [routerTransition()]
})
export class TablesComponent implements OnInit {
    constructor() {}

    ngOnInit() {}

    goToLink(){
        console.log("Clickable");
    }
}
