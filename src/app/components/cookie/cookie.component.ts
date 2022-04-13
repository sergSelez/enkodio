import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popup-cookie',
  templateUrl: './cookie.component.html',
  styleUrls: ['./cookie.component.scss']
})
export class CookiePopupComponent implements OnInit {
  showCookie = true;

  ngOnInit() {
    if(localStorage.getItem('isShowCookie')) {
      this.showCookie = false
    }
  }

  setCookie() {
    localStorage.setItem('isShowCookie', 'true');  
    this.showCookie = false  
  }
}
