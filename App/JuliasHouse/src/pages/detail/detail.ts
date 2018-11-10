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
  completion: boolean;
  currentDay: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.appointment = navParams.get('appointment');
    this.status = this.appointment.status;
    this.currentDay = "Saturday, November 10, 2018";
  }

  updateStatus(status) {
    if(status=="confirm"){
      this.completion = true;
    }
    this.navCtrl.push(CommentPage);
  }

  today(){
    return this.appointment.date == this.currentDay;
  }
  
  complete(){
    if (this.today()){
      return this.completion;
    }
    return false;
  }

  incomplete(){
    if (this.today()){
      return !this.completion;
    }
    return false;
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

}
