import React from 'react';
import Header from '../components/Header'
import '../styles/index.css';

const Main = (props) => {
  return (
    <div>
      <Header/>
      {props.children}
    </div>
  );
};

export default Main;