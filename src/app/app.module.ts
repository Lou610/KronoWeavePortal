import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UnauthComponent } from './unauth/unauth.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

import {
  MsAdalAngular6Module,
  AuthenticationGuard,
} from 'microsoft-adal-angular6';
import { SidebarComponent } from './sidebar/sidebar.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UnauthComponent,
    PagenotfoundComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MsAdalAngular6Module.forRoot({
      tenant: '4072b378-679d-4c55-91d7-ba82ed371ebc',
      clientId: 'f75d91b2-fd57-4db4-a5ba-a443e499ffd5',
      redirectUri: 'http://localhost:4200/home',
      endpoints: {
        'api application url': 'api application client id', // this is for feteching the access token
      },
      navigateToLoginRequestUrl: false,
      cacheLocation: '<localStorage /sessionStorage>',
      postLogoutRedirectUri:
        'URI on which you want to redirect user after logout',
    }),
  ],
  providers: [AuthenticationGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
