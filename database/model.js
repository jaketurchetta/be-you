const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const Controller = require('./controller.js');
const cors = require('cors');

const app = express();
const PORT = 3000;

// MIDDLEWARE
app.use(cors())
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

// ROUTES

// LISTEN
app.listen(PORT, console.log(`Be You listening on port ${PORT}`))