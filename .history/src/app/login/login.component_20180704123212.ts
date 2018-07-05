import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { routerTransition } from '../router.animations';
import {}

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
        private authenticationService: AuthenticationService,
        private userService: UserService) {}

    ngOnInit() {}

    onLoggedin() {
        localStorage.setItem('isLoggedin', 'true');
    }
}
