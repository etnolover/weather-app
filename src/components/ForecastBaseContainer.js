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

  componentDidMount() {
    weatherHelpers.getSevenDayWeatherForecast(this.state.weatherLocation)
      .then((data) => {
        this.setState({
          weatherData: data,
          isLoading: false
        })
      })
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