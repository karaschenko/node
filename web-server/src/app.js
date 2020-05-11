const path = require('path');
const express = require('express');
const hbs = require('hbs');

const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

console.log(__dirname);
console.log(path.join(__dirname, '../public'));

const app = express();

//Define paths for Express config
const publicDirectory = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');



//setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

//setup directory
app.use(express.static(publicDirectory));

//app.com

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather',
    name: 'Misha Zhykhariev'
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About me',
    name: 'Misha Zhykhariev'
  });
});

app.get('/help', (req, res) => {
  res.render('help', {
    title: 'Help page',
    name: 'Misha Zhykhariev',
    message: '  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dolorum illum nam necessitatibus nobis odit perspiciatis, voluptatum! Beatae dolorem esse in minima modi non perspiciatis quo quod, quos sed! Iusto!'
  });
});


app.get('/weather', (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: 'You must provide an address'
    });
  }

  geocode(req.query.address, (error, {latitude, longitude, location} = {}) => {
    if (error) {
      return res.send({
        error
      });
    }
    forecast(latitude, longitude, (error, forecastData) => {
      if (error) {
        return res.send({
          error
        });
      }

      res.send({
        forecastData,
        location,
        address: req.query.address,
      },);

    });
  });
});

app.get('/products', (req, res) => {
  if (!req.query.search) {
    return res.send({
      error: 'Your must provide a search tem'
    });
  }
  console.log(req.query.search);
  res.send({
    products: [],
  },);
});

app.get('/help/*', (req, res) => {
  res.render('404', {
    title: '404',
    name: 'Misha Zhykhariev',
    message: 'Help article not found'
  });
});


app.get('*', (req, res) => {
  res.render('help', {
    title: '404',
    name: 'Misha Zhykhariev',
    message: 'Page not found'
  });
});

app.listen(3000, () => {
  console.log('Server is up on port 3000')
});
