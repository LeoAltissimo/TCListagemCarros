import React from 'react';
import CarItemList from '../../components/CarItemList';
import '../../assets/styles/CarList.css'

class CartList extends React.Component {
  renderCartList() {
    const { list, editCar } = this.props;

    if (!list || list?.lenght === 0) return null;

    return list.map((car) => (
      <CarItemList 
        key={car.id}
        carData={car}
        editCar={() => editCar(car)}
      />
    ));
  }

  render() {
    return (
      <div className="carListContainer">
        {this.renderCartList()}
      </div>
    );
  }
}

export default CartList;
