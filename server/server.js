var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');

var app = express();
var routes = require('./controllers/routes.js');

var PORT = process.env.PORT || 3000;

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({
	limit: '50mb',
	extended: true,
	parameterLimit:50000}));
app.use(bodyParser.text());
app.use(bodyParser.json());

app.use(session({
	secret: 'lesson',
 	resave: true,
 	saveUninitialized: false
}));

app.use(express.static('./'));

require('./controllers/routes.js')(app, passport);

app.listen(PORT);
