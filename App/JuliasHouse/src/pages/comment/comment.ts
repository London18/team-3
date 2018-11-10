import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CommentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-comment',
  templateUrl: 'comment.html',
})
export class CommentPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    var data = []
    fetch('http://localhost:3000/status', {
      method: 'put',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    }).then(function (response) {
      console.log("Status updated");
    }).catch(function (err) {
      // Error :()
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommentPage');
  }

}
