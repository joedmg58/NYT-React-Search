var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require("mongoose");

//var indexRouter = require('./routes/index');
var routes = require('./routes');

var db = require('./models');

var app = express();

var server = app.listen( app.port, function() {
  console.log(new Date().toISOString() + ": server started on portal 3000");
});



app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
//app.use(express.static(path.join(__dirname, "client/build")));

app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/nytreact", { useNewUrlParser: true } );

// mongoose connection
var mongooseConnection = mongoose.connection;
// Get the default connection
mongooseConnection.on('error', console.error.bind(console, 'connection error:'));

mongooseConnection.once('open', function () {
  console.log('Successfully Connected to MongoDB !');
});

module.exports = app;
