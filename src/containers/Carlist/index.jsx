import React from 'react';
import CarItemList from '../../components/CarItemList';
import '../../assets/styles/CarList.css'

class CartList extends React.Component {
  renderCartList() {
    const { list } = this.props;

    if (!list || list?.lenght === 0) return null;

    return list.map((car) => (
      <CarItemList key={car.id} carData={car} />
    ));
  }

  render() {
    return (
      <div class="carListContainer">
        {this.renderCartList()}
      </div>
    );
  }
}

export default CartList;