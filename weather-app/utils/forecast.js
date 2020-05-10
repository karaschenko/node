const request = require('request');

const forecast = (ltd, lng, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=f695670428b49c00e147677c339269bb&query=${lng},${ltd}&units=m`;
  request({url, json: true}, (error, { body }) => {
    if (error) {
      callback('unable to connect to api');
    } else if (body.error) {
      callback('unable to find location');

    }
    else {
      const {current} = body;
      callback(null, `${current.weather_descriptions[0]}. It is currently ${current.temperature} degress out. It feels like ${current.feelslike} degress out`);
    }
  });

};

module.exports = forecast;
