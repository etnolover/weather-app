import React from 'react'
import Loading from './Loading'
import '../styles/ForecastBase.css'

const camelize = (word) => {
  return word.slice(0, 1).toUpperCase() + word.slice(1);
};

const ForecastBase = (props) => {

  if (props.isLoading === true) {
    return <Loading/>;
  }

  const showWeather = (data) => {
    return Object.keys(data).map((day) => {
      const imgAPI = `http://openweathermap.org/img/w/${ data[day]['icon'] }.png`;
      return (
        <div className="ForecastBase-day" key={data[day]['key']}>
          <img className="ForecastBase-img" src={imgAPI} alt="pic"/>
          <h2 className="ForecastBase-weekday">{data[day]['weekday']}</h2>
          <p className="ForecastBase-month-day">{data[day]['month']}, {data[day]['day']}</p>
          <p className="ForecastBase-temp"><b>Temp</b>: <span className="ForecastBase-degree">{data[day]['temp']} &deg;C</span></p>
        </div>
      )
    });
  };

  return (
      <div className="ForecastBase-bg">
        <h1 className="ForecastBase-city">Weather in { camelize(props.weatherData['city']) }</h1>
        <div className="ForecastBase-days">
          { showWeather(props.weatherData['details']) }
        </div>
      </div>
  );
};

export default ForecastBase;