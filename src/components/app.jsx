import React from 'react';
import CityList from '../containers/city_list.jsx';
import ActiveCity from '../containers/active_city';
// import { cities } from '../../data/cities.js';


const App = () => {
  return (
    <div className="app">
      <CityList cities={cities} />
      <ActiveCity />
    </div>
  );
};

export default App;
