import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';


const Home = () => (
  <h1> Hello this is react-router home..! </h1>);
const Address = () => (
  <h1> This is address page for react-router example !</h1>);
const NotFound = () => (
  <h1>404.. This page is not found!</h1>);

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/star-wars/watch-order" component={Address} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default App;
