import React, { Component } from 'react';

import SwapiService from '../../services/SwapiService';

import './RandomPlanet.css';

export default class RandomPlanet extends Component {

  swapiService = new SwapiService();

  state = {
    planet: {}
  };

  constructor() {
    super();
    this.updatePlanet();
  };

  onPlanetLoaded = (planet) => {
    this.setState({ planet });
  } 

  updatePlanet() {

    const id = Math.floor(Math.random()*25)+1;

    this.swapiService
      .getPlanet(id)
      .then(this.onPlanetLoaded);
  }

  render () {

    const { planet: {  id, name, population, rotationPeriod, diameter } } = this.state;

    return(
      <section className="RandomPlanet">
        <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="planet" />
        <div>
          <h2>{ name }</h2>
          <ul>
            <li>
              <span>Population </span>
              <span>{ population }</span>
            </li>
            <li>
              <span>Rotation Period </span>
              <span>{ rotationPeriod }</span>
            </li>
            <li>
              <span>Diametr </span>
              <span>{ diameter }</span>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}
