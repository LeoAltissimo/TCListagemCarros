let cars = [
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
];

const brands = [
  {
    'id': 1,
    'name': 'VW'
  },
  {
    'id': 2,
    'name': 'Chevrolet'
  },
  {
    'id': 3,
    'name': 'FIAT'
  },
  {
    'id': 4,
    'name': 'Ford'
  },
  {
    'id': 5,
    'name': 'Nissan'
  },
  {
    'id': 6,
    'name': 'Mitsubishi'
  }
]

export const _localGetBrandsList = () => brands;

export const _loaclGetCarList = (search) => {
  if (!search || !cars) return null;

  return cars.filter((value) => {
    return value.title?.toUpperCase().indexOf(search?.toUpperCase()) !== -1;
  })
}

export const _localAddCar = (carData) => {
  const newCar = {...carData, id: Math.floor(Math.random() * 1000)};

  if (!cars) {
    cars = [newCar];
    return;
  }

  cars.push(newCar);
}

export const _localEditCar = (carData) => {
  if (!carData || !cars) return;

  cars = cars.map((carOnList) => {
    if(carOnList.id === carData.id) {
      return carData;
    }
    return carOnList;
  });
}

export const _localDeleteCar = (carId) => {
  if (!carId || !cars) return null;

  cars = cars.filter((value) => {
    return !(value.id === carId);
  })
}