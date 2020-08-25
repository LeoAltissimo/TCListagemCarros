import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Skeleton from '../Skeleton';

import Presentation from '../Presentation';

import '../../assets/styles/Shared.css';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Skeleton>
          <Switch>
            <Route exact path="/" component={Presentation} />
          </Switch>
        </Skeleton>
      </BrowserRouter>

    );
  }
}