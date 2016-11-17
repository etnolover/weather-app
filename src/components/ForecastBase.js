import React from 'react'
import Loading from './Loading'
import '../styles/ForecastBase.css'

const ForecastBase = (props) => {

  if (props.isLoading === true) {
    return <Loading/>;
  }

  const showWeather = (data) => {
    return Object.keys(data).map((day) => {
      const imgAPI = `http://openweathermap.org/img/w/${ data[day]['icon'] }.png`;
      return (
        <div className="ForecastBase-day" key={data[day]['key']}>
          <img src={imgAPI} alt="pic"/>
          <h1>{data[day]['date']}</h1>
          <p>Temperature: {data[day]['temp']} &deg;C</p>
        </div>
      )
    });
  };

  return (
      <div className="ForecastBase-bg">{showWeather(props.weatherData['details'])}</div>
  );
};

export default ForecastBase;