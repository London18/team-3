# This folder contains the scripts to connect the front end with the database


## What is happening?

### Client side

Front end HTML calls functions in fetch.js

fetch.js uses fetch to create http call

http call is made to rest API


### Server side

http call is picked up by rest API (index.js)

index.js processes http call

Mongoose is then used to talk to the MongoDB

## How can I run it?

Run this first

```
$ node index.js
```
This should start listening to a server

Now run this in a separate terminal window

```
$ node fetch.js
```


## Ask me if you need anything!