import React from 'react';
import City from './city.jsx';

const CityList = (props) => {
  return (props.cities.map(city => <City key={city.name} city={city} /> ));
};

export default CityList;
