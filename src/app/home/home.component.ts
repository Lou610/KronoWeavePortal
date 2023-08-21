import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { MsAdalAngular6Service } from 'microsoft-adal-angular6';

function extractUsernameFromEmail(email: string): string | null {
  const parts = email.split('@');
  if (parts.length === 2) {
    return parts[0];
  }
  return null;
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
  constructor(private adalService: MsAdalAngular6Service) {
    if (this.adalService.userInfo) {
      this.Email = this.adalService.userInfo.userName;
      this.UserName = extractUsernameFromEmail(this.Email);
      this.License = 'Pro';
    } else {
      console.log('User information not available.');
    }
  }

  ngOnInit(): void {}

  login(): void {
    this.adalService.login();
  }

  logout(): void {
    this.adalService.logout();
  }
}
