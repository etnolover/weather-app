import React from 'react'
import Form from '../components/Form'
import '../styles/index.css';
import '../styles/Home.css'

const Home = () => {
  return (
    <div className="Home">
      <h1 className="Home__header">Enter a City and State</h1>
      <Form
        formClassName="Home__form"
        inputPlaceholder="Moscow, Russia"
        buttonText="Get Weather"/>
    </div>
  );
};

export default Home;