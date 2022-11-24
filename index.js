require('dotenv').config();
const express = require('express');
const port = process.env.PORT || '8080';
const swaggerUI = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');
const app = express();
const db = require('./config/mongoose');
const passport = require('passport');
const passportJWT = require('./config/passport-jwt');

app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
  res.send('<h1>Hospital API</h1><a href="/api-docs">Documentation</a>')
});

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

//loading the router
app.use('/', require('./routes/index'));

//starting the server
app.listen(port, function(err){
  if(err){
    console.log('Error in starting the server');
  }
  console.log(`Server is up and running and Port ${port}`);
})
