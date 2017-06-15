import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'sign-in-box-content',
  templateUrl: './sign-in-box-content.component.html',
  styleUrls: ['./sign-in-box-content.component.css']
})
export class SignInBoxContentComponent{
  constructor(private router: Router){
    console.log("Nothing");
  }

  sign_in_click() {
    this.router.navigate(['/dashboard']);
  }
  sign_up_click() {
    this.router.navigate(['/signup']);
  }
}
