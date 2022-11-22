const express = require('express');
const port = process.env.PORT || '8080';
const app = express();
const db = require('./config/mongoose');
const passport = require('passport');
const passportJWT = require('./config/passport-jwt');

//loading the router
app.use('/', require('./routes/index'));

//starting the server
app.listen(port, function(err){
  if(err){
    console.log('Error in starting the server');
  }
  console.log(`Server is up and running and Port ${port}`);
})
