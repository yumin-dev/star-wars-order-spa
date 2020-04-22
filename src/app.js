import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { Home, WatchOrders, NotFound } from './components';

const App = () => {
  return (
    <Router basename="/star-wars">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/watch-order" component={WatchOrders} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default (App);
