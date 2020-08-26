import axios from 'axios';

const API_URL = 'http://dev.tradersclub.com.br:12000/api';

/**
 * Summary: Request to get brands (complete list)
 */
export const getBrandsList = () => (
  new Promise((resolve, reject) => {
    axios.get(`${API_URL}/brands`)
      .then(({ data }) => resolve(data))
      .catch(err => reject(err));
  })
);

/**
 * Summary: Request to get a car list by search
 * @param {String} search | id of client.
 */
export const getCarListBySearch = (search) => (
  new Promise((resolve, reject) => {
    axios.get(`${API_URL}/cars?search${search}`)
      .then(({ data }) => resolve(data))
      .catch(err => reject(err));
  })
);

/**
 * Summary: Request to create a new car
 * @param {object} newCar | the car object data.
 */
export const postNewCar = (newCar) => (
  new Promise((resolve, reject) => {
    axios.post(`${API_URL}/cars`, newCar)
      .then(({ data }) => resolve(data))
      .catch(err => reject(err));
  })
);

/**
 * Summary: Request to edit a existent car
 * @param {object} editCar | the car object data.
 */
export const putCar = (editCar) => (
  new Promise((resolve, reject) => {
    axios.post(`${API_URL}/cars`, editCar)
      .then(({ data }) => resolve(data))
      .catch(err => reject(err));
  })
);

/**
 * Summary: Request to exclude a existent car
 * @param {object} removeCar | the car object data.
 */
export const deleteCar = (removeCar) => (
  new Promise((resolve, reject) => {
    axios.delete(`${API_URL}/cars`, removeCar)
      .then(({ data }) => resolve(data))
      .catch(err => reject(err));
  })
);
