import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { MsAdalAngular6Service } from 'microsoft-adal-angular6';
import { HttpService } from './../http.service';
import { HttpClient } from '@angular/common/http';

function extractUsernameFromEmail(email: string): string | null {
  const parts = email.split('@');
  if (parts.length === 2) {
    return parts[0];
  }
  return null;
}

export interface User {
  EmailAddress: string;
  userName: string;
  License: string;
}

export interface License {
  Id: string;
  license1: string;
  UserId: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  Email: string;
  UserName: any;
  License: any;
  Paid: string;
  Free: string;

  constructor(
    private adalService: MsAdalAngular6Service,
    public service: HttpService,
    public http: HttpClient
  ) {
    this.Paid = 'Paid';
    this.Free = 'Free';

    if (this.adalService.userInfo) {
      this.Email = this.adalService.userInfo.userName;

      this.GetUserName();

      this.GetLicense();
    } else {
      console.log('User information not available.');
    }
  }

  ngOnInit(): void {}

  GetUserName() {
    this.http
      .get<User>('https://localhost:7151/api/GetUserName?Email=' + this.Email)
      .subscribe((data) => {
        this.UserName = data.userName;
      });
  }

  GetLicense() {
    this.http
      .get<License>(
        'https://localhost:7151/api/GetLicenseType?Email=' + this.Email
      )
      .subscribe((data) => {
        console.log('License ' + JSON.stringify(data));
        this.License = data.license1;
      });
  }

  login(): void {
    this.adalService.login();
  }

  logout(): void {
    this.adalService.logout();
  }
}
