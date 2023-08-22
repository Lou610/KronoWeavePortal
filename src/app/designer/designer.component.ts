import { Component, ViewEncapsulation, ViewChild, OnInit, NO_ERRORS_SCHEMA } from '@angular/core';
import {
  DiagramComponent,
  SnapSettingsModel,
  SnapConstraints,
  ShapeStyleModel 
} from '@syncfusion/ej2-angular-diagrams';

import { MsAdalAngular6Service } from 'microsoft-adal-angular6';
import { HttpService } from './../http.service';
import { HttpClient } from '@angular/common/http';

import { Diagram, NodeModel, ImageElement, TextStyleModel } from '@syncfusion/ej2-diagrams';
import { Router } from '@angular/router';

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
  selector: 'app-designer',
  templateUrl: './designer.component.html',
  styleUrls: ['./designer.component.scss'],
})
export class DesignerComponent {
  @ViewChild('diagram')
  public diagram?: DiagramComponent;

  public snapSettings: SnapSettingsModel = {
    // Display both Horizontal and Vertical gridlines
    constraints: SnapConstraints.ShowLines,
  };

  Email: string;
  UserName: any;
  License: any;
  Paid: string;
  Free: string;

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


  public getNodeDefaults(node: NodeModel): NodeModel {
    node.height = 50;
    node.width = 50;
    ((node as NodeModel).style as ShapeStyleModel).fill =  'none';
    ((node as NodeModel).style as ShapeStyleModel).strokeColor =  'none';

    width: 50;
    height: 50;
    return node;
}
style: {
  fill: 'none',
  strokeColor: 'transparent',
  

}

  login(): void {
    this.adalService.login();
  }

  logout(): void {
    this.adalService.logout();
  }
Dashboard(){
  this.router.navigate(['/dashboard']);
}


}
