import React, { Component } from 'react';
import Skeleton from '../Skeleton';

import Presentation from '../Presentation';
import CarList from '../Carlist';

import '../../assets/styles/Shared.css';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      carList: [
        {
          'id': 1,
          'title': 'Celta Azul 2005 Ar e Direção',
          'model': 'Celta',
          'brand': 'Chevrolet',
          'year': 2005,
          'color': 'Azul marinho',
          'km': 106041,
          'price': 11772.22
        },
        {
          'id': 2,
          'title': 'Celta Preto 2003',
          'model': 'Celta',
          'brand': 'Chevrolet',
          'year': 2005,
          'color': 'Preta',
          'km': 209022,
          'price': 8762.22
        }
      ]
    }
  }

  render() {
    const { carList } = this.state;
    return (
      <Skeleton>
        {carList ? (
          <CarList list={carList} />
        ) : (
          <Presentation />
        )}
      </Skeleton>
    );
  }
}