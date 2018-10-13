var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//var indexRouter = require('./routes/index');
var usersRouter = require('./routes');

var db = require('./models');

var app = express();

var server = app.listen(3000, function() {
  console.log(new Date().toISOString() + ": server started on portal 3000");
});

app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/roboSurvey", { useNewUrlParser: true } );

// mongoose connection
var mongooseConnection = mongoose.connection;
// Get the default connection
mongooseConnection.on('error', console.error.bind(console, 'connection error:'));

mongooseConnection.once('open', function () {
  console.log('Successfully Connected to MongoDB !');
});

module.exports = app;
