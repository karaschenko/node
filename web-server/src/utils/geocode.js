const request = require('request');

const geocode = (address, callback) => {
  const API_KEY = 'pk.eyJ1Ijoia2FyYXNjaGVua28iLCJhIjoiY2s5c2Y4aHA5MTNxajNrcWNuMWdlZ3hxZiJ9.m-1ViBuLHw_5U2p_Ab1aPg';
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=${API_KEY}&limit=1`;
  request({url, json: true}, (error, { body }) => {
    if (error) {
      callback('Unable to connect');
    } else if (body.features.length === 0) {
      callback('unable to find location. Try another search');
    } else {
      const { features } =  body;
      callback(null, {
        latitude: features[0].center[0],
        longitude: features[0].center[1],
        location: features[0].place_name,
      })
    }
  })
};

module.exports = geocode;
