import React from 'react';
import Header from '../components/Header'
import '../styles/index.css';

class Main extends React.Component {
  render() {
    return (
      <div>

        <Header/>

        {this.props.children}

      </div>
    );
  }
}

export default Main;