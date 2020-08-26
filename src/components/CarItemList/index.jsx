import React from 'react';
import Currency from 'react-currency-formatter';
import Button from '../Button';

import '../../assets/styles/CarItemList.css';

class CarItemList extends React.Component {
  render() {
    const { carData, editCar } = this.props;

    return (
      <div className="carItemContainer limitedContainer" onClick={editCar}>
        <div className="carItemCotent">
          <div className="cartItemRow">
            <p className="cartitle">{carData.title || ''}</p>
            <p className="carText">
              <Currency
                quantity={carData.price || ''}
                currency="BRL"
                symbol="R$"
              />
            </p>
          </div>
          <div className="cartItemRow">
            <p className="carText">
              {`${carData.model || ''} - ${carData.brand || ''} - ${carData.km  || ''}Km`}
            </p>
            <p className="carText">{carData.year || ''}</p>
          </div>

        </div>
        <Button onClick={editCar}>
          Editar
        </Button>
      </div>
    );
  }
}

export default CarItemList;