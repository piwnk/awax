import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

import Home from './Home';
import About from './About';

import NoMatch from './NoMatch';

export default () => (
  <div id="main">
    <Switch>
      <Redirect exact from="/" to="/home" />

      <Route path="/home" component={Home} />
      <Route path="/about" component={About} />

      <Route component={NoMatch} />
    </Switch>
  </div>
);
