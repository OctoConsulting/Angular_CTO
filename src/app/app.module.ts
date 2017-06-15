import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { PersonalProfileComponent } from './personal-profile/personal-profile.component';
import { SignInBoxContentComponent } from './log-in/sign-in-box-content/sign-in-box-content.component';
import { SignUpBoxContentComponent } from './sign-up/sign-up-box-content/sign-up-box-content.component';

import { routing } from './app.routing';
import { BannerComponent } from './banner/banner.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { AvatarComponent } from './personal-profile/avatar/avatar.component';
import { BioComponent } from './personal-profile/bio/bio.component';
import { SocialMediaComponent } from './personal-profile/social-media/social-media.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    SignUpComponent,
    PersonalProfileComponent,
    SignInBoxContentComponent,
    SignUpBoxContentComponent,
    BannerComponent,
    NavBarComponent,
    DashBoardComponent,
    AvatarComponent,
    BioComponent,
    SocialMediaComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
