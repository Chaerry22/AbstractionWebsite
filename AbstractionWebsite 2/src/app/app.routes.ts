import { Routes } from '@angular/router';
import { HomePageComponentComponent } from '../component/home-page-component/home-page-component.component';
import { SignupPageComponent } from '../component/signup-page/signup-page.component';
import { LoginComponent } from '../component/login/login.component';

export const routes: Routes = [
{path: '', component: HomePageComponentComponent},

{path: 'signup-page', component: SignupPageComponent},

{path: 'login', component: LoginComponent},

{path: '**', redirectTo: ''}
];
