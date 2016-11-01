import React from 'react'
import '../styles/index.css';
import '../styles/Home.css'

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <h1 className="Home__header">Enter a City and State</h1>
        <form className="Home__form">
          <input className="form-input" type="text" placeholder="Moscow, Russia"/>
          <button className="form-button" type="button">Get Weather</button>
        </form>
      </div>
    );
  }
}


export default Home;