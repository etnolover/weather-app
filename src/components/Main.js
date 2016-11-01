import React from 'react';
import '../styles/index.css';
import '../styles/Main.css';

class Main extends React.Component {
  render() {
    return (
      <div className="Main">

        <div className="Main-header">

          <h2 className="Main-header__title">Open Weather App</h2>

          <form className="Main-header__form">
            <input className="form-input" type="text" placeholder="Moscow, Russia"/>
            <button className="form-button" type="button">Get Weather</button>
          </form>

        </div>

        {this.props.children}

      </div>
    );
  }
}

export default Main;