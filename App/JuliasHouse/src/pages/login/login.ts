import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppointmentsPage } from '../appointments/appointments';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  @ViewChild('username') username;
  @ViewChild('password') password;
  alert: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.alert = false;
  }

  public login() {
    console.log(this.username.value, this.password.value);
    if(this.username.value == "admin" && this.password.value == "admin") {
      this.navCtrl.setRoot(AppointmentsPage);
    } else {
      this.alert = true;
    }
  }

  badCred() {
      return this.alert;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
