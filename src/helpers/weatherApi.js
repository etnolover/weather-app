const YOUR_API_KEY = '0864e231a83814f77c4492d3069ca06d';

const kelvinToCelcius = (temp) => {
  return (temp -  273.15).toFixed(1);
};

const sevenDaysWeatherURL = (location) => {
  if (!location) { location = 'Moscow'; }
  return `http://api.openweathermap.org/data/2.5/forecast/daily?q=${location}&cnt=7&appid=${YOUR_API_KEY}`
};

const getWeatherResponse = (response) => {
  return response.json();
};

const getWeatherFromResponse = (json) => {
  let data = {
    city: json['city']['name'],
    details: {}
  };

  for(let i = 0; i < json['list'].length; i++) {
    let date = new Date( json['list'][i]['dt'] * 1000 );
    data['details']['day' + (i + 1)] = {
      key: i + 1,
      month: date.toLocaleString('en', {month: 'long'}),
      day: date.toLocaleString('en', {day: 'numeric'}),
      weekday: date.toLocaleString('en', {weekday: 'long'}),
      temp: kelvinToCelcius( json['list'][i]['temp']['eve'] ),
      icon: json['list'][i]['weather'][0]['icon']
    }
  }

  return data;
};

const weatherHelpers = {
  getSevenDayWeatherForecast(location) {
    return fetch(sevenDaysWeatherURL(location))
      .then(getWeatherResponse)
      .then(getWeatherFromResponse)
  }
};

export default weatherHelpers;