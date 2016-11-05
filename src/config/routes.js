import React from 'react'
import {Router, Route, IndexRoute, hashHistory} from 'react-router'
import Main from '../components/Main'
import Home from '../components/Home'
import ForecastBase from '../components/ForecastBase'

const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home}/>
      <Route path='/forecast/:city' component={ForecastBase}/>
    </Route>
  </Router>
);

export default routes;