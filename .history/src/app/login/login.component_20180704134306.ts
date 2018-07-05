import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { routerTransition } from '../router.animations';
import { AuthService} from '../services/AuthService';
import { UserService} from '../services/User.Service';
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

    private env: string[] = [
        'Dev',
        'Uat',
        'Prod'
    ];


    constructor(private router: Router,  private activatedRoute: ActivatedRoute,
        private authenticationService: AuthService,
        private userService: UserService, private usermanagementService: UserManagementService) {
            this.redirectUrl = this.activatedRoute.snapshot.queryParams['redirectTo'];
        }

    ngOnInit(): void {
        this.usermanagementService.getAllUsers().subscribe(
          data=>{
            this.user = data;
            console.log(this.user);
          }
        );
    }


    private navigateAfterSuccess() {
        if (this.redirectUrl) {
          this.router.navigateByUrl(this.redirectUrl);
        } else {
          this.router.navigate(['/']);
        }
      }
}
