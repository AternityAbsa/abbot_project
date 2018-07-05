import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { routerTransition } from '../router.animations';
import { AuthService} from '../services/AuthService';
import { UserManagementService } from '../services/UserManagementService';

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

    private env: string[] = [
        'Dev',
        'Uat',
        'Prod'
    ];

    constructor(private router: Router,  private activatedRoute: ActivatedRoute,
         private authenticationService: AuthService,
         private usermanagementService: UserManagementService,
         ) {
        }

    ngOnInit(): void {
       this.onLoggedin();

        this.usermanagementService.getAllUsers().subscribe(
          data=>{
            this.user = data;
            console.log(data);
          }
        );
     }

    onLoggedin(): void{
      this.authenticationService.login("admin@localhost", true, "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbkBsb2NhbGhvc3QiLCJhdXRoIjoiUk9MRV9BRE1JTiIsImV4cCI6MTUzMzMwOTMyM30.g2YN6y3gX6uKAyjtH3UBfILhihtsgGY0cdc7_g2w9PTE00jUWF7sB48KTU43rmGAXMKMoViWJvlZDuy9tglrFw").subscribe(
        data => {
          console.log(data);
        }
      );

    }
}
