import React from 'react'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import Main from '../components/Main'
import Home from '../components/Home'
import ForecastBaseContainer from '../containers/ForecastBaseContainer'

const routes = (
  <Router history={browserHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home}/>
      <Route path='/forecast/:city' component={ForecastBaseContainer}/>
    </Route>
  </Router>
);

export default routes;