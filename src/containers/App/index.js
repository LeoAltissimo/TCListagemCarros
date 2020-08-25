import React, { Component } from 'react';
import Skeleton from '../Skeleton';

import '../../assets/styles/Shared.css';

export default class App extends Component {
  render() {
    return (
      <Skeleton>
        <h1>Teste</h1>
      </Skeleton>
    );
  }
}