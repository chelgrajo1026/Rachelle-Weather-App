const request = require('request')

const weather = (latitude, longitude, callback) => {
    const units ='metric';
    const apiKey = '508a99fa8d97339a64506802b7036d54';
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=` + latitude + `&lon=` + longitude + `&appid=${apiKey}&units=${units}`;
    
    request({ url, json: true }, (error, { body }) => {
        if (error) {
          callback('Unable to connect to the weather service!', undefined);
        } else if (body.cod !== 200) {
          callback('Unable to find location!', undefined);
        } else {
          callback(undefined, body.wind.deg + ' is the wind speed.');
        }
      });
}

module.exports=weather
