import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'banner',
  template: `<div class="banner">
              <img src="../../assets/img/Banner.jpg"/>
                </div>`
})
export class BannerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
