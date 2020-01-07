import {Component } from '@angular/core';
import { navItems } from '../../_nav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  public sidebarMinimized = false;
  public navItems = navItems;
  year: number = new Date().getFullYear();

  goToLink(url: string){
    window.open(url, "_blank");
  }

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }
}
