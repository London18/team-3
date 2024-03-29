## This backend folder contains:
* scripts to connect the front end with the database
* the database

### What is happening?

#### Client side

* Front end HTML calls functions in fetch.js/fetchAppointment.js

* fetch.js uses fetch to create http call

* http call is made to rest API


#### Server side

* http call is picked up by rest API

* rest API processes http call

* Mongoose is then used to talk to the MongoDB

### How can I run it?

Run this first

```
$ node restAPI.js
```
This should start listening to a server and initialises the database

Now run the following in a separate terminal window

```
$ node fetch.js
```

You might also need to run this if fetch isn't working properly

```
npm i node-fetch --save
```

## Ask me if you need anything!
