import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CommentPage } from '../comment/comment';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  appointment: any;
  status: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.appointment = navParams.get('appointment');
    this.status = this.appointment.status
  }

  updateStatus(status) {
    this.navCtrl.push(CommentPage, {
      appointment: this.appointment,
      status: status
    });
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

}
