import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { MsAdalAngular6Service } from 'microsoft-adal-angular6';
import { HttpService } from './../http.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { initFlowbite } from 'flowbite';


export interface User {
  EmailAddress: string;
  userName: string;
  License: string;
}

export interface UserList{

    id: number,
    userName: string,
    userEmailAddress: string,
    isActive: boolean,
    license1: string,
    userId: null
}


export interface License {
  Id: string;
  license1: string;
  UserId: string;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  Email: string;
  UserName: any;
  License: any;
  Paid: string;
  Free: string;
  users: any;

  public cellSpacing: number[] = [10, 10];

  constructor(
    private adalService: MsAdalAngular6Service,
    public service: HttpService,
    public http: HttpClient,
    public router: Router
  ) {
    this.Paid = 'Paid';
    this.Free = 'Free';

    if (this.adalService.userInfo) {
      this.Email = this.adalService.userInfo.userName;

      this.GetUserName();

      this.GetLicense();

      this.GetUsers();
    } else {
      console.log('User information not available.');
    }
  }

  ngOnInit(): void {
    initFlowbite();
  }

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
        this.License = data.license1;
      });
  }

  Designer() {
    this.router.navigate(['/designer']);
  }

  User() {
    this.router.navigate(['/users']);
  }

  GetUsers() {
    this.http
      .get<User>('https://localhost:7151/api/GetUsers')
      .subscribe((data) => {
        this.users = data;
        console.log(this.users);
      });
  }

  login(): void {
    this.adalService.login();
  }

  logout(): void {
    this.adalService.logout();
  }
}