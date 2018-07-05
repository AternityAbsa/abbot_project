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
    rememberMe: Boolean;

    private env: string[] = [
        'Dev',
        'Uat',
        'Prod'
    ];

    private remmember: boolean[] = [
      true,
      false
    ];

    constructor(private router: Router,  private activatedRoute: ActivatedRoute,
         private authenticationService: AuthService,
         private usermanagementService: UserManagementService
         ) {
        }

    ngOnInit(){

        this.Login();
        this.getAllUsers();
        
     }

    Login(): void{
      this.authenticationService.login('admin@localhost', true, 'admin').subscribe(
        data => {
          console.log(" Authentication Token " + data )
        }
      );
     // this.router.navigate(['/charts']);
      localStorage.setItem('isLoggedin', 'true');
    }

    getAllUsers(){
      this.usermanagementService.getAllUsers().subscribe(
        data=>{
          this.user = data;
          console.log("User List" + data);
        }
      );
    }
}
