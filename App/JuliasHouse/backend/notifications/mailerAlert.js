var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'testjuliahouse@gmail.com',
    pass: 'JuliaJulia'
  }
});  /*Setting up Node.js with gmail*/


/* Assume that the extracted data is of the form: */

CurrentTime = 2030
LeftFamilyHome = 1800
ArrivingHome = 0

/*In the database, if a button has been pressed, it will have the value of the time it was pressed, 
and else if it hasn't been pressed, then it will have value 0.
*/
var sendCarerReminder = {
  from: 'testjuliahouse@gmail.com',
  to: 'dzoo142857@gmail.com', /*this email would otherwise be that of the carer*/
  subject: 'Reminder : Please update app status of your safety',
  text: 'Carer has not confirmed safe arrival home' /*Status_message sent from database*/
};   

function sendCarerMail() {
  myFunc = transporter.sendMail(sendCarerReminder, function(error, info){
    if (error) {
      console.log(error);
    } else {
    }
  ;
  });
}

CarerID = [1,2,3,4,5]

for (carer in CarerID){
  if (CurrentTime > (LeftFamilyHome + 150) && ArrivingHome == 0){
    sendCarerMail()
    console.log("Reminder email sent to carer" + carer)

  }
}


var sendCarerReminder = {
  from: 'testjuliahouse@gmail.com',
  to: 'dzoo142857@gmail.com', /*this email would otherwise be that of the carer*/
  subject: 'Reminder : Please update app status of your safety',
  text: 'Carer has not confirmed safe arrival home' /*Status_message sent from database*/
};   

function sendCarerMail() {
  myFunc = transporter.sendMail(sendCarerReminder, function(error, info){
    if (error) {
      console.log(error);
    } else {
    }
  ;
  });
}

var sendOfficeUrgent = {
  from: 'testjuliahouse@gmail.com',
  to: 'dzoo142857@gmail.com', /*this email would otherwise be that of the nurse*/
  subject: '[URGENT] CarerName of Appointment A12344, Family of ChildName',
  text: 'Carer has not confirmed safe arrival home after 2 hours. Their phone is XXX, their home address is XXX, their next of kin details are XXX' /*Status_message sent from database*/
};  /*Extract Carer:PhoneNum, Carer:Address, CarerKinNum*/

function sendOfficeMail() {
  myFunc = transporter.sendMail(sendOfficeUrgent, function(error, info){
    if (error) {
      console.log(error);
    } else {}
  ;
  });
}

for (carer in CarerID){
  if (CurrentTime > (LeftFamilyHome + 200) && ArrivingHome == 0){
    sendCarerMail()
    console.log("Urgent mail sent to Office about carer " + carer)

  }
}

/*
var sendNurseUrgent = {
  from: 'testjuliahouse@gmail.com',
  to: 'dzoo142857@gmail.com', this email would otherwise be that of the nurse
  subject: '[URGENT] CarerName of Appointment A12344, Family of ChildName',
  text: 'Carer has not confirmed safe arrival home after 2 hours. Their phone is XXX, their home address is XXX, their next of kin details are XXX' /*Status_message sent from database*/
/* };  Extract Carer:PhoneNum, Carer:Address, CarerKinNum

function sendNurseMail() {
  myFunc = transporter.sendMail(sendNurseUrgent, function(error, info){
    if (error) {
      console.log(error);
    } else {}
  ;
  });
}
*/