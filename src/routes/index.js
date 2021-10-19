import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import PropTypes from 'prop-types';
import Home from '../views/Home';
import Team from '../views/Team';
import New from '../views/New';

export default function Routes() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={() => <Home />} />
        <Route exact path="/Team" component={() => <Team />} />
        <Route exact path="/New" component={() => <New />} />
      </Switch>
    </div>
  );
}
