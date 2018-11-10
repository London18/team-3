import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailPage } from '../detail/detail';

@Component({
  selector: 'page-appointments',
  templateUrl: 'appointments.html'
})
export class AppointmentsPage {

  appointments: any[];
  today_appointments: any[];

  constructor(public navCtrl: NavController) {
    this.appointments = [];
    this.today_appointments = [];

    // Get appointments list
    fetch('http://localhost:400/appointments', {
      method: 'get'
      // These interpret the response from the rest API
    }).then(function (response) {
      return response.json();
    }).then(function (json) {
      console.log("Here are your appointments:");
      console.log(json);
    }).catch(function (err) {
      // Error :()
    });

    this.today_appointments = [
      {family_name: 'Morgan',
      address: '95 Bank Street',
      comments: 'Thank you so much! Look forward to seeing you again',
      start_time: '9:00',
      end_time: '12:30',
      date: 'Saturday, November 10, 2018',
      number: '+12910241981',
      status: 'Not started'},
      {family_name: 'Chase',
      address: '72 Robinson Rd.',
      comments: 'We would like the caregiver to get there a bit early to take care of the kids.',
      start_time: '16:00',
      end_time: '19:00',
      date: 'Saturday, November 10, 2018',
      number: '+967026113981',
      status: 'Not started'}]

    for (let i = 0; i < 4; i++) {
      this.appointments.push({
        family_name: 'Other Family ' + i,
        address: '1292 Newcastle St.',
        comments: 'We would like the caregiver to get there a bit early to take care of the kids.',
        start_time: '09:00',
        date: 'Friday, November 9, 2018',
        end_time: '15:30',
        number: '+12910241981',
        id: i
      });
    }
  }

  appointmentSelected(appointment) {
    this.navCtrl.push(DetailPage, {
      appointment: appointment
    });
  }

}
