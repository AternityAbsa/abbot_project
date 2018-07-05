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
        private userService: UserService, usermanagementServ) {
            this.redirectUrl = this.activatedRoute.snapshot.queryParams['redirectTo'];
        }

    ngOnInit(): void {
        this.userService.logout();
    }

    login() {
        this.loading = true;

    this.authenticationService.login(this.user.username, this.user.password)
      .subscribe(
        result => {
          this.loading = false;

          if (result) {
            this.userService.login(result);
            this.navigateAfterSuccess();
          } else {
            this.error = 'Username or password is incorrect';
          }
        },
        error => {
          this.error = 'Username or password is incorrect';
          this.loading = false;
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
