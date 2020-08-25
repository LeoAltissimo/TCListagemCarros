import React from 'react';
import Currency from 'react-currency-formatter';
import Button from '../Button';

import '../../assets/styles/CarItemList.css';

class CarItemList extends React.Component {
  render() {
    const { carData } = this.props;

    return (
      <div class="carItemContainer limitedContainer">
        <div class="carItemCotent">
          <div class="cartItemRow">
            <p class="cartitle">{carData.title}</p>
            <p class="carText">
              <Currency
                quantity={carData.price}
                currency="BRL"
                symbol="R$"
              />
            </p>
          </div>
          <div class="cartItemRow">
            <p class="carText">
              {`${carData.model} - ${carData.brand} - ${carData.km}Km`}
            </p>
            <p class="carText">Celta4</p>
          </div>

        </div>
        <Button>
          Editar
        </Button>
      </div>
    );
  }
}

export default CarItemList;