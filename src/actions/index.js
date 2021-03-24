import { cities } from '../../data/cities.js';

// TODO: add and export your own actions
export const SET_CITIES = 'SET_CITIES';
export const SET_ACTIVE_CITY = 'SET_ACTIVE_CITY';

export function setCities() {
  return {
    type: SET_CITIES,
    payload: cities
  };
}

export function setActiveCity(city) {
  return {
    type: SET_ACTIVE_CITY,
    payload: city
  };
}
