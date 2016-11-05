const YOUR_API_KEY = '0864e231a83814f77c4492d3069ca06d';
let CITY_NAME = 'London, UK';

const currentWeatherURL = `http://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&appid=${YOUR_API_KEY}`;
const fiveDaysWeatherURL = `http://api.openweathermap.org/data/2.5/forecast?q=${CITY_NAME}&appid=${YOUR_API_KEY}`;

const getWeatherResponse = (response) => {
  console.log('FROM WEATHER_API.JS:  ' + response.status);
  return response.json();
};

const getCurrentWeatherFromResponse = (json) => {
  const kelvinToCelsius = Math.round(json['main']['temp'] -  273.15);
  console.log('FROM WEATHER_API.JS:  ' + json['name']);
  console.log('FROM WEATHER_API.JS:  ' + kelvinToCelsius);
  return {
    city: json['name'],
    temp: kelvinToCelsius
  }
};

const weatherHelpers = {
  getCurrentWeather() {
    return fetch(currentWeatherURL)
      .then(getWeatherResponse)
      .then(getCurrentWeatherFromResponse)
  },

  getFiveDayWeatherForecast() {
    fetch(fiveDaysWeatherURL)
      .then(getWeatherResponse)
  }
};

export default weatherHelpers;