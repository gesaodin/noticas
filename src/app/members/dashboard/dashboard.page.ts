import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/login/authentication.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(private authen: AuthenticationService) { }

  ngOnInit() {
  }

  logout(){
    console.log("Entrando");
    this.authen.logout();
  }
}
