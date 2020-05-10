const http = require('http');
const url = `http://api.weatherstack.com/current?access_key=f695670428b49c00e147677c339269bb&query=40,-75`;

const request = http.request(url, (response) => {
  let data = "";

  response.on('data', (chunk) => {
    data = data + chunk.toString();
  });

  response.on('end', () => {
    const body = JSON.parse(data);
    console.log(body);

  });
});

request.on('error', err => console.log(err));

request.end();
