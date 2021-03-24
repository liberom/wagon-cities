import cities from '../../data/cities.js';

// TODO: add and export your own actions
export const SET_CITIES = 'SET_CITIES';
export const SELECT_CITY = 'SELECT_CITY';

export function setCities() {
  return {
    type: SET_CITIES,
    payload: cities
  };
}

export function selectCity(city) {
  return {
    type: SELECT_CITY,
    payload: city
  };
}
