import { AuthService } from './../../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  login() {
    // api success
    this.authService.isUserLoggedIn = true;
    sessionStorage.setItem('isUserLoggedIn', 'true');
    this.router.navigate(['home'])
  }

}
