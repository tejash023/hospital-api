const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/hospital-api-dev');

const db = mongoose.connection;

db.on('error',console.error.bind('Error connecting to the DB'));

db.once('open', () => {
  console.log('Sucessfully connected to the DB');
} )