import React from 'react'
import ForecastBase from '../components/ForecastBase'
import weatherHelpers from '../helpers/weatherApi'



class ForecastBaseContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherLocation: props.location.state.weatherLocation,
      weatherData: {},
      isLoading: true
    };
  }

  getWeather(location) {
    weatherHelpers.getSevenDayWeatherForecast(location)
      .then((data) => {
        this.setState({
          weatherData: data,
          isLoading: false
        })
      })
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
      isLoading: true
    });

    this.getWeather(nextProps.location.state.weatherLocation);
  }

  componentDidMount() {
    this.getWeather(this.state.weatherLocation);
  }

  render() {
    return (
      <ForecastBase
        weatherData={this.state.weatherData}
        isLoading={this.state.isLoading}/>
    );
  };

}

export default ForecastBaseContainer;