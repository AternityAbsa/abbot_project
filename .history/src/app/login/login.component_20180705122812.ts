import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { routerTransition } from '../router.animations';
import { AuthService} from '../services/AuthService';
import { UserManagementService } from '../services/UserManagementService';
import { AuthModel } from '../models/AuthModel';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {

    user: any = {};
    loading = false;
    error = '';
    redirectUrl: string;
    username: string;
    password: string;
    rememberMe: boolean;
    model = new AuthModel.

    private env: string[] = [
        'Dev',
        'Uat',
        'Prod'
    ];

    constructor(private router: Router,  private activatedRoute: ActivatedRoute,
         private authenticationService: AuthService,
         private usermanagementService: UserManagementService,
         private authenticationModel : AuthModel,
         public userName: string, public remember: boolean, public passWord: string
         ) {
        }

    ngOnInit(){
       this.Login();

        this.usermanagementService.getAllUsers().subscribe(
          data=>{
            this.user = data;
            console.log("User List" + data);
          }
        );
     }

    Login(){
      this.authenticationService.login(this.username, this.rememberMe, this.password).subscribe(
        data => {
          this.authenticationModel.username = data['value'].map(data=>data.username);
          this.authenticationModel.rememberMe = data['value'].map(data=>data.passowrd);
          this.authenticationModel.password = data['value'].map(data=>data.rememberMe);
          console.log("Authentication Response" + data);
        }
      );
      localStorage.setItem('isLoggedin', 'true');
    }
}
