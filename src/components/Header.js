import React from 'react'
import { Link } from 'react-router'
import Form from '../components/Form'
import '../styles/index.css';
import '../styles/Header.css';

const Header = () => {
  return (
    <div className="Header">
      <Link to="/" activeStyle={{textDecoration: 'none'}}>
        <h2 className="Header__title">Home</h2>
      </Link>
      <Form
        formClassName="Header__form"
        inputPlaceholder="Moscow, Russia"
        buttonText="Get Weather"/>
    </div>
  );
};

export default Header;