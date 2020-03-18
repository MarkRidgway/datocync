require('dotenv').config()
const app = require('express')();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const express = require('express');

const errors = require('./app/middleware/errors');

const port = process.env.PORT || 8888;

// configure
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));

// Static Directory
app.use(express.static('app/public'));

// set routes
app.use(require('./app/routes'));

// Error middleware
app.use(errors.logErrors);
app.use(errors.sendErrors);

// start tje server
app.listen(port, function(){
  console.log(`App listening on http://localhost:${port}`);
});
