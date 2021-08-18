import { AuthService } from './../service/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({ providedIn: 'root'})
export class AuthGuard implements CanActivate {
    constructor(
        private authService: AuthService,
        private router: Router
    ) {}

    canActivate() {
        const isUserLoggedInFromSessionStorage =  sessionStorage.getItem('isUserLoggedIn');

        const isUserLoggedIn  = isUserLoggedInFromSessionStorage && JSON.parse(isUserLoggedInFromSessionStorage)
        if (this.authService.isUserLoggedIn || isUserLoggedIn) {
            return true
        } else {
            this.router.navigate(['login'])
            return false;
        }
    }
}