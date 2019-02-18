import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/login/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private auth: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  login(){
    this.auth.login();
  }
  
  register(){
    this.router.navigate(['register']);
  }
}
