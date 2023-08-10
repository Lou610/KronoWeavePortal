import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UnauthComponent } from './unauth/unauth.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

import { MsAdalAngular6Module,AuthenticationGuard } from 'microsoft-adal-angular6';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UnauthComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MsAdalAngular6Module.forRoot({
      tenant: '4072b378-679d-4c55-91d7-ba82ed371ebc',
      clientId: '1212ee28-ea23-4d8c-ad82-e1b47e1a6fdc',
      redirectUri: 'http://localhost:4200',
      endpoints: { 
      'api application url': 'api application client id', // this is for feteching the access token
      },
      navigateToLoginRequestUrl: false,
      cacheLocation: '<localStorage /sessionStorage>',
      postLogoutRedirectUri: 'URI on which you want to redirect user after logout',
      }),
  ],
  providers: [AuthenticationGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
