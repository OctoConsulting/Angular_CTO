import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { PersonalProfileComponent } from './personal-profile/personal-profile.component';

const appRoutes: Routes =[
  {
    path: 'login',
    component: LogInComponent
  },

  {
    path: 'dashboard',
    component: DashBoardComponent
  },

  {
    path: 'signup',
    component: SignUpComponent
  },

  {
    path: 'profile',
    component: PersonalProfileComponent
  },

  {
    path: '**',
    redirectTo: 'login'
  }

];

export const routing : ModuleWithProviders = RouterModule.forRoot(appRoutes);
