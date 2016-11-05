import React from 'react'
import weatherHelpers from '../helpers/weatherApi'

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.formClassName = props.formClassName;
    this.inputPlaceholder = props.inputPlaceholder;
    this.buttonText = props.buttonText;
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const weatherParams = {};
    weatherHelpers.getCurrentWeather()
      .then((obj) => Object.assign(weatherParams, obj));
    console.log(weatherParams['city']);
    this.context.router.push({
      pathname: '/forecast/' + this.state.value + '|test',
      state: {
        weather: weatherParams
      }
    });
    console.log(this.context.router.location.state.weather);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={this.formClassName}>
        <input
          type="text"
          className="form-input"
          placeholder={this.inputPlaceholder}
          value={this.state.value}
          onChange={this.handleChange}/>
        <button
          type="button"
          className="form-button"
          onClick={this.handleSubmit}>
          {this.buttonText}
        </button>
      </form>
    );
  }

}

Form.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default Form;