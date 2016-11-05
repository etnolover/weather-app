import React from 'react'
import Loading from './Loading'

class ForecastBase extends React.Component {
  render() {
    console.log('FROM FORECAST_BASE.JS:');
    console.log(this.props.location.state.weather['city']);
    return (
      <div>
        <Loading/>
      </div>
    );
  }
}

export default ForecastBase;