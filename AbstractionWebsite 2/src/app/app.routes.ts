import { Routes } from '@angular/router';
import { HomePageComponentComponent } from '../component/home-page-component/home-page-component.component';
import { SignupPageComponent } from '../component/signup-page/signup-page.component';
import {LeadershipComponent} from '../component/leadership/leadership.component';
import { LoginComponent } from '../component/login/login.component';
import { HackathonComponent } from '../component/hackathon/hackathon.component';
import { CommunityProjectComponent } from '../component/community-project/community-project.component';
import { WorkshopsComponent } from '../component/workshops/workshops.component';

export const routes: Routes = [
{path: '', component: HomePageComponentComponent},

{path: 'signup-page', component: SignupPageComponent},

{path: 'hackathon', component: HackathonComponent},

{path: 'community-project', component: CommunityProjectComponent},

{path: 'workshops', component: WorkshopsComponent},

{path: 'login', component: LoginComponent},

{path: 'leadership', component: LeadershipComponent},

{path: '**', redirectTo: ''}
];