import React, { Component } from 'react';
import Skeleton from '../Skeleton';
import Presentation from '../Presentation';
import CarList from '../Carlist';
import CarForm from '../CarForm';

import '../../assets/styles/Shared.css';

import {
  getBrandsList,
  getCarListBySearch,
  postNewCar,
  putCar,
  deleteCar,
} from '../../services';

/** ENDPOINTS LOCAIS PARA TESTE */
import {
  _localGetBrandsList,
  _loaclGetCarList,
  _localAddCar,
  _localEditCar,
  _localDeleteCar,
} from '../../DEVDATA';

/** PARA CONSUMIR OS ENDPOINTS REAIS ALTERE: DEV = false;  */

/** IMPORTANTE */
const DEV = true;
/** IMPORTANTE */

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentSearch: '',
      currentCarEdit: null,
      showCarForm: false,
      bandListLoading: false,
      lisIsLoading: false,
      crudIsLoading: false,
      carList: [],
      brandOptions: []
    };
  }

  componentWillMount() {
    this.requestBrandsList();
  }

  /**
   * Handler to request a brands list
   */
  async requestBrandsList() {
    if (DEV) {
      const list = _localGetBrandsList();
      this.setState({ brandOptions: list });
      return;
    }

    try {
      this.setState({ bandListLoading: true })
      const brandList = await getBrandsList();
      this.setState({ brandOptions: brandList, bandListLoading: false });
    } catch (e) {
      const error = "Erro durante a requisição de lista de marcas ";
      console.error(error, e);
      this.setState({ error, bandListLoading: false });
    }
  }

  /**
   * Handler to request a list of cart by search
   */
  async sendSearch(search) {
    if (DEV) {
      const list = _loaclGetCarList(search);
      this.setState({ carList: list, currentSearch: search });
      return;
    }

    if (!search) return;

    try {
      this.setState({ lisIsLoading: true })
      const carList = await getCarListBySearch(search);
      this.setState({ carList, lisIsLoading: false });
    } catch (e) {
      const error = "Erro durante a requisição de lista de carros ";
      console.error(error, e);
      this.setState({ error, lisIsLoading: false });
    }
  }

  /**
   * Handler to modify or create a car
   * @param {object} carData | Car object data.
   */
  async modCar(carData) {
    const { currentSearch } = this.state;

    if (DEV) {
      if (carData.id) {
        _localEditCar(carData);
      } else {
         _localAddCar(carData);
      }
     
      const list = _loaclGetCarList(currentSearch);
      this.setState({ showCarForm: false, carList: list });
      return;
    }

    try {
      this.setState({ crudIsLoading: true })

      if (carData.id) {
        await putCar(carData);
      } else {
        await postNewCar(carData);
      }

      this.setState({ crudIsLoading: false });
    } catch (e) {
      const error = `Erro durante a ${carData.id ? 'Edicao' : 'Criacao'} de um carro`;
      console.error(error, e);
      this.setState({ error, crudIsLoading: false });
    }
    
    this.sendSearch(currentSearch);
  }

  /**
   * Handler to remove a car
   * @param {number} carId | id of a existent car.
   */
  async deleteCar(carId) {
    const { currentSearch } = this.state;
    
    if (DEV) {
      _localDeleteCar(carId);
      const list = _loaclGetCarList(currentSearch);
      this.setState({ showCarForm: false, carList: list });
      return;
    }

    try {
      this.setState({ crudIsLoading: true })

      await deleteCar(carId);

      this.setState({ crudIsLoading: false });
    } catch (e) {
      const error = `Erro durante a exclusão de um carro`;
      console.error(error, e);
      this.setState({ error, crudIsLoading: false });
    }
    
    this.sendSearch(currentSearch);
  }

  /**
   * Handler to set actual view content
   */
  setActualView() {
    const {
      carList,
      showCarForm,
      brandOptions,
      currentSearch,
      currentCarEdit,
    } = this.state;

    if(showCarForm)
      return (
        <CarForm
          brandOptions={brandOptions}
          carData={currentCarEdit}
          onCloseForm={() => this.setState({ showCarForm: false })}
          modCar={(car) => this.modCar(car)}
          deleteCar={(carId) => this.deleteCar(carId)}
        />
      );

    if(carList?.length > 0)
      return (
        <CarList
          list={carList}
          editCar={(car) => (
            this.setState({showCarForm: true, currentCarEdit: car })
          )}
        />
      );

    if(!currentSearch)
      return <Presentation />;

    return (
      <p className="message">
        Nenhum Resultado Encontrado
      </p>
    );
  }
  
  render() {
    const { lisIsLoading, showCarForm, error } = this.state;

    return (
      <Skeleton
        sendSearch={(s) => this.sendSearch(s)}
        onCarForm={showCarForm}
        handleForm={(show) => (
          this.setState({ showCarForm: show, currentCarEdit: null })
        )}
      >
        {error && !showCarForm && <p className="error">{error}</p>}
        {!error && !showCarForm && lisIsLoading && (
          <p className="message">Carregando...</p>
        )}
        {this.setActualView()}
      </Skeleton>
    );
  }
}