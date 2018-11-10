var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'testjuliahouse@gmail.com',
    pass: 'JuliaJulia'
  }
});  /*Setting up Node.js with gmail*/


var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.collection("appointments").findOne({}, function(err, result) /*Extract data about the time leaving family home*/ {
    if (err) throw err;
    console.log(result.name);
    db.close();
  });
});

/* 

For every carer where Leaving Family Home != 0 AND Arriving Home == 0


Extract time stamp of Leaving Family Home
If current time > leaving family time + 1.5 hours AND the extracted value for Arriving Home == 0 
Then send email to carer to remind them as below: */

var sendCarerReminder = {
  from: 'testjuliahouse@gmail.com',
  to: 'dzoo142857@gmail.com', /*this email would otherwise be that of the carer*/
  subject: 'Reminder : Please update app status of your safety',
  text: 'Carer has not confirmed safe arrival home' /*Status_message sent from database*/
};   

function sendCarerReminder() {
	myFunc = transporter.sendMail(sendCarerReminder, function(error, info){
	  if (error) {
	    console.log(error);
	  } else {
	    console.log('Email sent: ' + info.response);
	  }
	;
	});
}

/* Extract time stamp of Leaving Family Home
If current time > leaving family time + 2 hours AND the extracted value for Arriving Home == 0 
Then send email to carer to remind them as below: */

var sendNurseUrgent = {
  from: 'testjuliahouse@gmail.com',
  to: 'dzoo142857@gmail.com', /*this email would otherwise be that of the nurse*/
  subject: '[URGENT] CarerName of Appointment A12344, Family of ChildName',
  text: 'Carer has not confirmed safe arrival home after 2 hours. Their phone is XXX, their home address is XXX, their next of kin details are XXX' /*Status_message sent from database*/
};  /*Extract Carer:PhoneNum, Carer:Address, CarerKinNum*/

function sendNurseUrgent() {
	myFunc = transporter.sendMail(sendNurseUrgent, function(error, info){
	  if (error) {
	    console.log(error);
	  } else {
	    console.log('Email sent: ' + info.response);
	  }
	;
	});
}


 
/*setTimeout(sendEmail, 1500); Set a timer to repeat this checking process of all carers every hour. */

/*
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.createCollection("appointments", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });

  var dbo = db.db("mydb");
  var myobj = {"Date": "22/11/1993", "Carer_ID": "56"}
  dbo.collection("appointments").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
   });
}); */



