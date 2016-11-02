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
    console.log(this.state.value);
    weatherHelpers.getCurrentWeather();
    this.setState({
      value: ''
    });
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

export default Form;