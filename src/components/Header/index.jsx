import React from 'react';
import InputField from '../../components/InputField';
import Button from '../../components/Button';
import '../../assets/styles/Header.css';

class Header extends React.Component {
  render() {
    const {
      sendSearch,
      handleForm,
      onCarForm,
    } = this.props;

    return (
      <div className="headerContainer">
        <div className="limitedContainer flex">
        <InputField
          placeholder="Pesquise por um veículo"
          onChange={(e) => sendSearch(e.target.value)}
        />
        <Button
          onClick={() => handleForm(!onCarForm)}
        >
          {onCarForm ? 'Cancelar' : 'Cadastrar'}
        </Button>
        </div>
      </div>
    );
  }
}

export default Header;