const express = require('express');
const hbs = require('hbs');
const fs = require('fs');
const socketIo = require("socket.io");
const http = require("http");
const port = process.env.PORT || 3000;
const car_control = require('./car_information/car_control');
const station_control = require('./station_information/station_control');

var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use((req, res, next) => {
   var now = new Date().toString();
   var log = `${now}: ${req.method} ${req.url}`
  // console.log(log);
   fs.appendFile('server.log', log + '\n', (err) => {
       if (err) {
           console.log('Unable to append to server.log.')
       }
   });
   next(); 
});

app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase();
});

app.get('/', (req, res) => {
    res.render('home.hbs', {
        pageTitle: 'About Page',
        welcomeMessage: 'Morjesta'
    });
});

app.get('/projects', (req, res) => {
    res.render('projects.hbs', {
        pageTitle: 'Projects'
    });
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'About Page',
    });
});

app.get('/bad', (req, res) => {
    res.send({
        errorMessage: 'Bad request'
    });
});

app.get('/getChargeLocation', (req, res) => {
	car_control.appfunc();
	res.send({
	});
});

app.get('/getStationData', (req, res) => {
	//var stat_data;
	//station_control.stationData.getStationData(stat_data);
//	console.log(stat_data);
	var a = station_control.stationData();
	console.log(a);
	res.send({});
});

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});