// Create Database
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost/mydb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});

// Create Collection into .js
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbcus = db.db("mydb");
  dbcus.createCollection("customers", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
}); 

// Insert into Collection
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbpat = db.db("mydb");
  var myobj = { name: "Company Inc", address: "Highway 37" };
  dbpat.collection("customers").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
}); 

// Insert Multiple Patients/Carers/Appointments
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbpat = db.db("mydb");
  var myobj = [
    { name: 'John', address: 'Highway 71'},
    { name: 'Peter', address: 'Lowstreet 4'},
    { name: 'Amy', address: 'Apple st 652'},
    { name: 'Hannah', address: 'Mountain 21'},
    { name: 'Michael', address: 'Valley 345'},
    { name: 'Sandy', address: 'Ocean blvd 2'},
    { name: 'Betty', address: 'Green Grass 1'},
    { name: 'Richard', address: 'Sky st 331'},
    { name: 'Susan', address: 'One way 98'},
    { name: 'Vicky', address: 'Yellow Garden 2'},
    { name: 'Ben', address: 'Park Lane 38'},
    { name: 'William', address: 'Central st 954'},
    { name: 'Chuck', address: 'Main Road 989'},
    { name: 'Viola', address: 'Sideway 1633'}
  ];
  dbo.collection("customers").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
}); 



var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbcar = db.db("mydb");
  var myobj = [
    { name: 'Sophia', contact: '111111111'},
    { name: 'Stefan', contact: '223114224'},
    { name: 'Golia', contact: '456789765'},
    { name: 'Helen', contact: '456729765'},
   
  ];
  dbcar.collection("customers").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
}); 


var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbapp = db.db("mydb");
  var myobj = [
    { Date: '02/11/2018', Carer_ID: 'Stefan', Family_ID: 'Peter', Comments:'Arriving late!'},
    { Date: '02/11/2018', Carer_ID: 'Golia', Family_ID: 'Susan', Comments:''},
    { Date: '02/11/2018', Carer_ID: 'Helen', Family_ID: 'Chuck', Comments:'On time as always!'},
    { Date: '03/11/2018', Carer_ID: 'Stefan', Family_ID: 'John', Comments:'Very good visit'},
    { Date: '03/11/2018', Carer_ID: 'Golia', Family_ID: 'Amy', Comments:''},
    { Date: '06/11/2018', Carer_ID: 'Helen', Family_ID: 'Vicky', Comments:''},
    { Date: '07/11/2018', Carer_ID: 'Golia', Family_ID: 'William', Comments:'Late sorry'}
    { Date: '07/11/2018', Carer_ID: 'Helen', Family_ID: 'Viola', Comments:''}, 
 ];
  dbapp.collection("customers").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
}); 

// Get the latest appointments
db.dbapp.find({}).sort({Date:1}).limit(1);
