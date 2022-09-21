const express = require('express');
const mongoose = require('mongoose');
const { errorHandler } = require('./middleWare/errorHandler/errorHandler');
const router = require('./routes/travel.route');
const app = express();
app.use(express.json());
app.use('/',router);
app.use(errorHandler);
module.exports = app;