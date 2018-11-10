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
    for(let i = 0; i < 10; i++){
      this.appointments.push({
        family_name: 'Family ' + i,
        address: '1292 Newcastle St.',
        comments: 'We would like the caregiver to get there a bit early to take care of the kids.',
        start_time: '09:00',
        end_time: '15:30',
        date: 'Friday, November 10, 2018',
        number: '+12910241981',
        status: 'Not started',
        id: i
      });
    }

    for(let i = 0; i < 2; i++){
      this.today_appointments.push({
        family_name: 'Today Family ' + i,
        address: '1292 Newcastle St.',
        comments: 'We would like the caregiver to get there a bit early to take care of the kids.',
        start_time: '09:00',
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
