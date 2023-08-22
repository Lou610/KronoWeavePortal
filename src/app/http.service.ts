import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface User {
  EmailAddress: string;
  userName: string;
  License: string;
}

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  url: string;

  UserName: string;

  constructor(public http: HttpClient) {
    this.url = 'https://localhost:7151/api/';
  }

  GetUserDetails(EmailAddress: string) {
    this.http
      .get<User>(
        'https://localhost:7151/api/GetUserName?Email=destroflare%40antisocialgamers.co.za'
      )
      .subscribe((data) => {
        // handle the data
        this.UserName = data.userName;

        console.log(data.userName);

        return this.UserName;
      });
  }

  getData() {
    this.http
      .get(
        'https://localhost:7151/api/GetUserName?Email=destroflare@antisocialgamers.co.za'
      )
      .subscribe((data) => {
        // handle the data
      });
  }
}
