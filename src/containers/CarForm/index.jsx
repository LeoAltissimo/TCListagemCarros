import React from 'react';
import InputField from '../../components/InputField';
import SelectField from '../../components/SelectField';
import Button from '../../components/Button';

import '../../assets/styles/CarForm.css';

class CarFrom extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      currentCar: {
        id: null,
        title: null,
        model: null,
        brand: null,
        year: null,
        color: null,
        km: null,
        price: null,
      }
    };
  }

  componentWillMount() {
    const { currentCar } = this.state;
    const { carData } = this.props;

    this.setState({
      currentCar: {
        ...currentCar,
        ...carData,
      }
    });
  }

  handleFields(fieldValue) {
    if (!fieldValue.target.id) return;
    this.setState({ error: null });

    const { currentCar } = this.state;
    this.setState({
      currentCar: {
        ...currentCar,
        [fieldValue.target.id]: fieldValue.target.value,
      }
    });
  }

  handeModCar() {
    const { currentCar } = this.state;
    const { modCar } = this.props;
    let error = null;

    if (!currentCar.title) {
      error = 'O título é obrigatório';
    }
    if (!currentCar.price) {
      error = 'Preencha o preço do veículo';
    }
    if (!currentCar.year) {
      error = 'Preencha o ano do veículo';
    }

    if (error) {
      this.setState({ error })
      return;
    }

    modCar(currentCar);
  }

  render() {
    const { error, currentCar } = this.state;
    const { brandOptions, deleteCar, onCloseForm } = this.props;

    return (
      <div className="carFormContainer limitedContainer">
        {error && <p className="error">{error}</p>}

        <InputField
          id="title"
          variant
          placeholder="Titulo"
          value={currentCar.title || ''}
          onChange={(e) => this.handleFields(e)}
        />

        <div className="carFormInputHalfL">
          <InputField
            id="model"
            variant
            placeholder="Modelo"
            value={currentCar.model|| ''}
            onChange={(e) => this.handleFields(e)}
          />
        </div>

        <div className="carFormInputHalfR">
          <InputField
            id="year"
            variant
            type="select"
            placeholder="Ano"
            value={currentCar.year || ''}
            onChange={(e) => this.handleFields(e)}
          />
        </div>

        <SelectField
          id="brand"
          placeholder="Marca"
          options={brandOptions}
          value={currentCar.brand || ''}
          onChange={(e) => this.handleFields(e)}
        />

        <div className="carFormInputHalfL">
          <InputField
            id="color"
            variant
            placeholder="Cor"
            value={currentCar.color || ''}
            onChange={(e) => this.handleFields(e)}
          />
        </div>

        <div className="carFormInputHalfR">
          <InputField
            id="price"
            variant
            type="number"
            placeholder="Preço"
            pattern="[0-9]+([\.,][0-9]+)?"
            step="0.01"
            value={currentCar.price || ''}
            onChange={(e) => this.handleFields(e)}
          />
        </div>

        <div className="carFormInputHalfL">
          <InputField
            id="km"
            variant
            type="number"
            placeholder="Quilometragem"
            value={currentCar.km || ''}
            onChange={(e) => this.handleFields(e)}
          />
        </div>

        <div className="carFormButtonsRow">
          <div className="carFormaButtonsGroup">
            {currentCar.id && (
              <Button variant onClick={() => deleteCar(currentCar.id)}>
                Remover
              </Button>
            )}
            
            <Button variant onClick={() => onCloseForm()}>
              Cancelar
            </Button>
          </div>

          <Button onClick={() => this.handeModCar()}>
            Salvar
          </Button>
        </div>
      </div>
    );
  }
}

export default CarFrom;