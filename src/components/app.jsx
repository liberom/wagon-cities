import React from 'react';
import CityList from '../containers/city_list.jsx';
import { cities } from '../../data/cities.js';


const App = () => {
  return (
    <div className="app">
      <CityList cities={cities} />
    </div>
  );
};

export default App;
