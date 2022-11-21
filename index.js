const express = require('express');
const port = process.env.PORT || '8080';
const app = express();
const db = require('./config/mongoose');


//loading the router
app.get('/', require('./routes/index'));

//starting the server
app.listen(port, function(err){
  if(err){
    console.log('Error in starting the server');
  }
  console.log(`Server is up and running and Port ${port}`);
})
