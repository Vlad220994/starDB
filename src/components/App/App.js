import React from 'react';

import Header from '../Header/Header';
import RandomPlanet from '../RandomPlanet/RandomPlanet';
import PersonDetails from '../PersonDetails/PersonDetails';
import StarshipDetails from '../StarshipDetails/StarshipDetails';

import './App.css'

const App = () => {
  return(
    <div className="App">
      <Header />
      <RandomPlanet />
      <PersonDetails />
      <StarshipDetails />
    </div>
  );
};

export default App;
