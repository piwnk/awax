import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Contact from './Contact';

import NoMatch from './NoMatch';

import './Pages.css';

export default () => (
  <div id="page">
    <Switch>
      <Redirect exact from="/" to="/home" />

      <Route path="/home" component={Home} />
      <Route path="/aboutus" component={About} />
      <Route path="/contactus" component={Contact} />

      <Route component={NoMatch} />
    </Switch>
  </div>
);
