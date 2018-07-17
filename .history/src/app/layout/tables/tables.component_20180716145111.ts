import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { routerTransition } from '../../router.animations';

class CredentialsList {
    Value: string;   
    constructor(  public description: string = '',
                  public login: string = '', public name: string = '', public  password: string='',
                  public invalid: number = 0,
                  public id: number = 0
          ) 
          {
              this.id = id;
              this.invalid = invalid;
              this.login = login;
              this.name = name;
              this.password = password;
            
          }
  }

@Component({
    selector: 'app-tables',
    templateUrl: './tables.component.html',
    styleUrls: ['./tables.component.scss'],
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
export class TablesComponent implements OnInit {
    credentialsForm: FormGroup;
    modalRef: NgbModalRef;
    userList: UserList[];
    constructor() {}

    ngOnInit() {

    }

    
}
