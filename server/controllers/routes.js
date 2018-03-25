var pg = require('pg');
var express = require('express');
var path = require('path');
var router = express.Router();
var dbUrl;
var models = require('./../models');
models.sequelize.sync();

if(process.env.DATABASE_URL){
	dbUrl = process.env.DATABASE_URL
} else {
	dbUrl = {
		user: process.argv.POSTGRES_USER,
		password: process.argv.POSTGRES_PASSWORD,
		database: 'iDJ',
		host: 'localhost',
		port: 5432
	}
}

var pgClient = new pg.Client(dbUrl);
pgClient.connect();

var path = require('path');

var LocalStrategy = require('passport-local').Strategy;
var bcrypt = require('bcrypt-nodejs');

module.exports = (app, passport) => {

	app.get('/', function(req,res){
		res.sendFile(path.join(__dirname, './../../client/public/index.html'));
	});

	app.get('*', function(req,res){
		res.sendFile(path.join(__dirname, './../../client/public/index.html'));
	});

}
