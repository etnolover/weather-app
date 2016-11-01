import React from 'react'
import Form from '../components/Form'
import '../styles/index.css';
import '../styles/Header.css';

function Header() {
  return (
    <div className="Header">

      <h2 className="Header__title">Weather App</h2>

      <Form
        formClassName="Header__form"
        inputPlaceholder="Moscow, Russia"
        buttonText="Get Weather"/>

    </div>
  );
}

export default Header;