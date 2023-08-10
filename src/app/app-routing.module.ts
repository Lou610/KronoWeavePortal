import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UnauthComponent } from './unauth/unauth.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AuthenticationGuard } from 'microsoft-adal-angular6';

const routes: Routes = [
  { path: 'home', component: HomeComponent,canActivate: [AuthenticationGuard] },
  { path: 'unauth', component: UnauthComponent },
  
  { path: '',   redirectTo: '/home', pathMatch: 'full'}, // redirect to   // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
