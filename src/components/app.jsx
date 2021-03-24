import React from 'react';
import CityList from './city_list.jsx';
import { cities } from '../../data/cities.js';


const App = () => {
  return (
    <div className="app">
      <CityList className="cities" cities={cities} />
    </div>
  );
};

export default App;
