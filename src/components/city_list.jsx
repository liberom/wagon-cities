import React from 'react';

const CityList = (props) => {
  return (props.cities.map(city => <City key={city.name} /> ));
};

export default CityList;
