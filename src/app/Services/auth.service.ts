// auth.service.ts
import { Injectable } from '@angular/core';
import { UserManager, User } from 'oidc-client';


@Injectable({
    providedIn: 'root'
  })
  export class AuthService {
    private userManager: UserManager;
  
    constructor() {
      this.userManager = new UserManager({
        authority: 'OIDC_PROVIDER_URL',
        client_id: 'YOUR_CLIENT_ID',
        redirect_uri: 'YOUR_REDIRECT_URI',
        response_type: 'code',
        scope: 'openid profile',
      });
    }
  
    login(): Promise<void> {
      return this.userManager.signinRedirect();
    }
  
    completeAuthentication(): Promise<User> {
      return this.userManager.signinRedirectCallback();
    }
  
    isAuthenticated(): boolean {
      return this.userManager.getUser() != null;
    }
  
    logout(): Promise<void> {
      return this.userManager.signoutRedirect();
    }
  }