import React from 'react';

import Header from '../Header/Header';
import PlanetDetails from '../PlanetDetails/PlanetDetails';
import PersonDetails from '../PersonDetails/PersonDetails';
import StarshipDetails from '../StarshipDetails/StarshipDetails';

import './App.css'

const App = () => {
  return(
    <div className="App">
      <Header />
      <PlanetDetails />
      <PersonDetails />
      <StarshipDetails />
    </div>
  );
};

export default App;
