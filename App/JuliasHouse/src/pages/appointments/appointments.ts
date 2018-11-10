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
      image: 'https://www.shutterstock.com/image-photo/family-home-17813797',
      date: 'Saturday, November 10, 2018',
      number: '+12910241981',
      status: 'Not started'},
      {family_name: 'Chase',
      address: '72 Robinson Rd.',
      comments: 'We would like the caregiver to get there a bit early to take care of the kids.',
      start_time: '16:00',
      end_time: '19:00',
      image: 'https://www.shutterstock.com/image-photo/cute-little-girl-her-beautiful-parents-556490314',
      date: 'Saturday, November 10, 2018',
      number: '+967026113981',
      status: 'Not started'}]

    
    this.appointments = [
    {family_name: 'Smith',
    address: '8 Pembroke Rd.',
    comments: 'We are thinking of doing a park trip today',
    start_time: '12:00',
    end_time: '19:25',
    image: 'https://www.shutterstock.com/image-photo/technology-travel-tourism-hike-people-concept-579417739',
    date: 'Monday, November 12, 2018',
    number: '+44910241981',
    status: 'Not started'},
{family_name: 'Green',
    address: '2 Crescent Rd.',
    comments: 'We have a birthday party to go to!',
    start_time: '16:00',
    end_time: '18:00',
    image: 'https://www.shutterstock.com/image-photo/father-mother-holds-little-girl-on-735658939',
    date: 'Thursday, November 15, 2018',
    number: '+12910241981',
    status: 'Not started'},
    {family_name: 'Johnson',
    address: '127 Wilberforce Rd.',
    comments: 'Reading books today please!',
    start_time: '8:00',
    end_time: '12:00',
    image: 'https://www.shutterstock.com/image-photo/photo-happy-family-four-looking-camera-149775476',
    date: 'Friday, November 24, 2018',
    number: '+62010241981',
    status: 'Not started'},
{family_name: 'Thomson',
    address: '10 George St.',
    comments: 'See you soon, we may have to leave early',
    start_time: '13:00',
    end_time: '14:00',
    image: 'https://www.shutterstock.com/image-photo/photo-affectionate-parents-kissing-their-small-149775455',
    date: 'Thursday, November 30, 2018',
    number: '+12910241981',
    status: 'Not started'},
{family_name: 'Ashley',
    address: '72 Robinson Rd.',
    comments: 'We would like the caregiver to get there a bit early to take care of the kids.',
    start_time: '15:00',
    end_time: '19:30',
    image: 'https://www.shutterstock.com/image-photo/happy-asian-family-two-children-taking-278316929',
    date: 'Tuesday, December 10, 2018',
    number: '+12910241981',
    status: 'Not started'}]
  }

  appointmentSelected(appointment) {
    this.navCtrl.push(DetailPage, {
      appointment: appointment
    });
  }

}
