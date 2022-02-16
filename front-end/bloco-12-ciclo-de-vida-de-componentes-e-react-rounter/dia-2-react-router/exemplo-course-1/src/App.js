import React, { Component } from 'react';
import Home from './Home';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import About from './About';
import HowTo from './HowTo';
import Profile from './Profile';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/about" component={About} />
        <Route path="/howto" component={HowTo} />
        <Route path="/profile/:ship" render={(props) => <Profile {...props} name="gatinha s2"/>} />
        <Route exact path="/" component={Home} />
      </BrowserRouter>
    )
  }
}
