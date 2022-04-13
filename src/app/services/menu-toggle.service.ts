import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MenuToggleService {
  menuTrigger = false;
  mobileMenuTrigger = false;

  clickEvent() {
    this.mobileMenuTrigger = !this.mobileMenuTrigger;
  }
  menuToggle() {
    this.menuTrigger = !this.menuTrigger;
  }

  constructor() {}
}
