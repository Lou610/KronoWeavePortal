import { Component, OnInit } from '@angular/core';
import { ViewChild } from "@angular/core";
import { MsAdalAngular6Service } from 'microsoft-adal-angular6';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {



  constructor(private adalService: MsAdalAngular6Service) {
    if (this.adalService.userInfo) {
      console.log('User Info:', this.adalService.userInfo);
    } else {
      console.log('User information not available.');
    }

  }

  ngOnInit(): void {

  }

  login(): void {
    this.adalService.login();
  }

  logout(): void {
    this.adalService.logout();
  }


}
