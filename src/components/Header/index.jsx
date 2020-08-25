import React from 'react';
import InputField from '../../components/InputField';
import Button from '../../components/Button';
import '../../assets/styles/Header.css';

class Header extends React.Component {
  render() {
    return (
      <div class="headerContainer">
        <InputField
          placeholder="Pesquise por um veículo"
        />
        <Button>Cadastrar</Button>
      </div>
    );
  }
}

export default Header;