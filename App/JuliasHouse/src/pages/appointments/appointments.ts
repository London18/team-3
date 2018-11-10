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
      image: '../assets/imgs/familyavatar.png',
      date: 'Saturday, November 10, 2018',
      number: '+12910241981',
      status: 'Not started'},
      {family_name: 'Chase',
      address: '72 Robinson Rd.',
      comments: 'We would like the caregiver to get there a bit early to take care of the kids.',
      start_time: '16:00',
      end_time: '19:00',
      image: '../assets/imgs/2.jpg',
      date: 'Saturday, November 10, 2018',
      number: '+967026113981',
      status: 'Not started'}]

    
    this.appointments = [
    {family_name: 'Smith',
    address: '8 Pembroke Rd.',
    comments: 'We are thinking of doing a park trip today',
    start_time: '12:00',
    end_time: '19:25',
    image: '../assets/imgs/3.jpg',
    date: 'Monday, November 12, 2018',
    number: '+44910241981',
    status: 'Not started'},
{family_name: 'Green',
    address: '2 Crescent Rd.',
    comments: 'We have a birthday party to go to!',
    start_time: '16:00',
    end_time: '18:00',
    image: '../assets/imgs/4.jpg',
    date: 'Thursday, November 15, 2018',
    number: '+12910241981',
    status: 'Not started'},
    {family_name: 'Johnson',
    address: '127 Wilberforce Rd.',
    comments: 'Reading books today please!',
    start_time: '08:00',
    end_time: '12:00',
    image: '../assets/imgs/5.jpg',
    date: 'Friday, November 24, 2018',
    number: '+62010241981',
    status: 'Not started'},
{family_name: 'Thomson',
    address: '10 George St.',
    comments: 'See you soon, we may have to leave early',
    start_time: '13:00',
    end_time: '14:00',
    image: '../assets/imgs/2.jpg',
    date: 'Thursday, November 30, 2018',
    number: '+12910241981',
    status: 'Not started'},
{family_name: 'Ashley',
    address: '72 Robinson Rd.',
    comments: 'We would like the caregiver to get there a bit early to take care of the kids.',
    start_time: '15:00',
    end_time: '19:30',
    image: '../assets/imgs/1.jpg',
    date: 'Tuesday, December 10, 2018',
    number: '+12910241981',
    status: 'Not started'}]
  }

  callAdmin() {
    console.log("Called!");
  }

  appointmentSelected(appointment) {
    this.navCtrl.push(DetailPage, {
      appointment: appointment
    });
  }

}
