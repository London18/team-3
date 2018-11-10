import { Component } from '@angular/core';
import { App, MenuController } from 'ionic-angular';
import { LoginPage } from '../../pages/login/login';

@Component({
  selector: 'header-menu',
  templateUrl: 'header-menu.html'
})
export class HeaderMenuComponent {

  text: string;

  constructor(public menuCtrl: MenuController, public app: App) {
  }
  profileClicked() {
    console.log("profile");
    
  }
  careClicked() {
    console.log("care");
    
  }
   noteClicked() {
    console.log("note");
    
  }

  logoutClicked() {
    console.log("Logout");
    this.menuCtrl.close();
    var nav = this.app.getRootNav();
    nav.setRoot(LoginPage);
  }
}
